let plans = [{
    plan_name: "Basic",
    price: "100",
    interest_rate: "5%",
    community_access: true,
    dedicated_support: false,
    free_voucher:false,
    monthly_status_report:false,
},

{
    plan_name: "Premium",
    price: "300",
    interest_rate: "7%",
    community_access: true,
    dedicated_support: true,
    free_voucher: true,
    monthly_status_report: false,
},

{
    plan_name: "Enterprise",
    price: "1000",
    interest_rate:"10%",
    community_access: true,
    dedicated_support: true,
    free_voucher: true,
    monthly_status_report: true,
}
]

function get_all_plans() {
    return plans;
}