
export function getDashboardType(user:any) {
    let dashboardType = "client";
    if (user && user.role == "ROLE_FREELANCER") dashboardType = "seller";
    return `/dashboard?t=${dashboardType}`;
}
