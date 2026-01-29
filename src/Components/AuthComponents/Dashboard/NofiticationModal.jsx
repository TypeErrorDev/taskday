import { useState, useEffect } from "react";
// Adjust these dots to point correctly to your createClient file
import { supabase } from "../../../createClient";

const NofiticationModal = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("Notifications")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setNotifications(data || []);
    } catch (err) {
      console.error("Error fetching notifications:", err.message);
    } finally {
      setLoading(false);
    }
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

  const unreadCount = notifications.filter((n) => !n.is_read).length;

  return (
    <div className="w-80 bg-white border rounded-lg shadow-2xl flex flex-col max-h-[450px] text-left">
      <div className="p-4 border-b flex justify-between items-center bg-slate-50 rounded-t-lg">
        <div>
          <h3 className="font-bold text-gray-800 text-sm">Notifications</h3>
          <p className="text-[10px] text-gray-500">{unreadCount} unread</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto min-h-[100px]">
        {loading ? (
          <div className="p-10 text-center text-gray-400 text-xs">
            Loading...
          </div>
        ) : notifications.length > 0 ? (
          notifications.map((n) => (
            <div
              key={n.id}
              className={`p-4 border-b last:border-0 relative ${!n.is_read ? "bg-purple-50/50" : ""}`}
            >
              <div className="flex justify-between items-start mb-1">
                <span
                  className={`text-xs font-bold ${!n.is_read ? "text-gray-900" : "text-gray-500"}`}
                >
                  {n.title}
                </span>
              </div>
              <p className="text-[11px] text-gray-600 leading-tight">
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
          ))
        ) : (
          <div className="p-10 text-center text-gray-400 text-xs">
            No notifications
          </div>
        )}
      </div>
    </div>
  );
};

export default NofiticationModal;
