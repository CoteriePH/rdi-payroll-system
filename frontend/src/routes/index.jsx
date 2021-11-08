import { lazy } from "react";

const routes = [
  {
    path: "",
    component: lazy(() => import("@/containers/HumanResources")),
    exact: true,
  },
  {
    path: "payroll",
    component: lazy(() => import("@/containers/Payroll")),
  },
  {
    path: "attendance",
    component: lazy(() => import("@/containers/Attendance")),
  },
  {
    path: "employee-file",
    component: lazy(() => import("@/containers/EmployeeFile")),
  },
  {
    path: "memo",
    component: lazy(() => import("@/containers/Memo")),
  },
  {
    path: "cash-advance",
    component: lazy(() => import("@/containers/CashAdvance")),
  },
  {
    path: "request",
    component: lazy(() => import("@/containers/Request")),
  },
];

export default routes;
