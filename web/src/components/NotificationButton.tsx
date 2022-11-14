import notificationIcon from '../assets/notification-icon.svg';

export function NotificationButton() {
    return (
        <div className="w-11 h-11 rounded-lg flex items-center justify-center cursor-pointer bg-[#ff6b72]/10 border-[#ff6b72] border hover:bg-[#ff6b72]/40 transition">
            <img src={notificationIcon} alt="Notify" className="w-5" />
        </div>
    );
}