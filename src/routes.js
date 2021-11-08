import VueRouter from "vue-router";
import EmployeeList from "./components/EmployeeList";
import Employee from "./components/Employee";

const routes = [
    {
        path: "/",
        component: EmployeeList,
        name: "home",
    },
    {
        path: "/employees/:id",
        component: Employee,
        name: "employee",
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
