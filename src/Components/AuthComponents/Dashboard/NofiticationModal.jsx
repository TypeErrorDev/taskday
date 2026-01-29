import { useState, useEffect } from "react";
import { supabase } from "../../../createClient";

const NofiticationModal = ({ dismissedIds, setDismissedIds }) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // REMOVED: const [dismissedIds, setDismissedIds] = useState([]);
  // We use the ones coming from props now so they persist in the Nav.

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("Notifications")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setNotifications(data || []);
    setLoading(false);
  };

  const markAsRead = async (id) => {
    const { error } = await supabase
      .from("Notifications")
      .update({ is_read: true })
      .eq("id", id);

    if (!error) {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, is_read: true } : n)),
      );
    }
  };

  const clearViewLocally = () => {
    const allCurrentIds = visibleNotifications.map((n) => n.id);
    // This updates the state in DashboardTopNav
    setDismissedIds((prev) => [...prev, ...allCurrentIds]);
  };

  const visibleNotifications = notifications.filter(
    (n) => !dismissedIds.includes(n.id),
  );

  const unreadCount = visibleNotifications.filter((n) => !n.is_read).length;

  return (
    <div className="w-80 bg-white border rounded-lg shadow-2xl flex flex-col max-h-[450px] animate-in slide-in-from-top-2 duration-200">
      <div className="p-4 border-b flex justify-between items-center bg-slate-50 rounded-t-lg">
        <div>
          <h3 className="font-bold text-gray-800 text-sm">Notifications</h3>
          <p className="text-[10px] text-gray-500">{unreadCount} new alerts</p>
        </div>
        {visibleNotifications.length > 0 && (
          <button
            onClick={clearViewLocally}
            className="text-[10px] text-red-500 hover:text-red-700 font-bold uppercase tracking-wider"
          >
            Clear View
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-10 text-center text-gray-400 text-xs">
            Loading...
          </div>
        ) : visibleNotifications.length > 0 ? (
          visibleNotifications.map((n) => (
            <div
              key={n.id}
              className={`p-4 border-b last:border-0 hover:bg-gray-50 flex gap-3 ${!n.is_read ? "bg-purple-50/40" : ""}`}
            >
              <div className="flex-1 text-left">
                <div className="flex justify-between items-start mb-1">
                  <span
                    className={`text-xs font-bold ${!n.is_read ? "text-black" : "text-gray-400"}`}
                  >
                    {n.title}
                  </span>
                </div>
                <p
                  className={`text-[11px] leading-tight ${!n.is_read ? "text-gray-700" : "text-gray-400"}`}
                >
                  {n.message}
                </p>
                {!n.is_read && (
                  <button
                    onClick={() => markAsRead(n.id)}
                    className="mt-2 text-[10px] font-bold text-purple-600 hover:underline"
                  >
                    Mark as Read
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="p-10 text-center text-gray-400 text-xs italic">
            No new activity to show.
          </div>
        )}
      </div>
    </div>
  );
};

export default NofiticationModal;
