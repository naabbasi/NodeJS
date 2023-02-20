import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";

function MainLayout() {
    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-1 shadow w-60">
                <div className="space-y-3">
                    <Sidebar className="h-full" aria-label="Sidebar with multi-level dropdown">
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiChartPie}
                                >
                                    Dashboard
                                </Sidebar.Item>
                                <Sidebar.Collapse
                                    icon={HiShoppingBag}
                                    label="Billing"
                                >
                                    <Sidebar.Item href="#">
                                        Products
                                    </Sidebar.Item>
                                </Sidebar.Collapse>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiInbox}
                                >
                                    Inbox
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiUser}
                                >
                                    Users
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiShoppingBag}
                                >
                                    Products
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiArrowSmRight}
                                >
                                    Sign In
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiTable}
                                >
                                    Sign Up
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>
            </div>
            <div className="container mx-auto mt-12">
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total users
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            12,00
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Profit
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            $ 450k
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Orders
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            20k
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;