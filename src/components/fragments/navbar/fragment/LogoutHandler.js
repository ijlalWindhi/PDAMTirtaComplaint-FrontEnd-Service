export default function LogoutHandler() {
    if(window.confirm("Are you sure to logout?")) {
        window.location = '/'
        localStorage.clear()
    }
}