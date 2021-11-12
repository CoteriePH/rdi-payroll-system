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
    exact: true,
    component: lazy(() => import("@/containers/CashAdvance")),
  },
  {
    path: "cash-advance/processed",
    exact: true,
    component: lazy(() => import("@/containers/ProcessedCA")),
  },
  {
    path: "cash-advance/unprocessed",
    exact: true,
    component: lazy(() => import("@/containers/UnprocessedCA")),
  },
  {
    path: "request",
    component: lazy(() => import("@/containers/Request")),
  },
];

export default routes;
