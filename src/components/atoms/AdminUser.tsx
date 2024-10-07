import React, { useState, type FC, type ReactNode } from "react";
import UsersIcon from "@src/assets/icons/UsersIcon";
import data from "@utils/data/users.json";
import { AddIcon, FilterIcon } from "@src/assets/icons";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@src/components/ui/sheet/sheet";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu/dropdown-menu";
import {
  type ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import { MoreHorizontal, MoreVertical } from "lucide-react";
import Link from "next/link";
import { TableElement } from "../ui/table/table";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu/dropdown-menu";
import { Button, PasswordInput, TextInput } from "../ui";
import { useGetAllUsersQuery } from "@src/utils/services/ApiService";
interface DataType {
  id?: string;
  username?: string;
  user_image?: string;
  gender?: string;
  matNumber?: string;
  role?: string;
}
function renderRole(val: string): ReactNode {
  switch (val) {
    case "guest":
      return (
        <span className="rounded-lg border border-green-800 bg-green-300 px-3 py-2 text-green-800">
          {val}
        </span>
      );
    case "student":
      return (
        <span className="rounded-lg border border-blue-600 bg-blue-200 px-3 py-2 text-blue-600">
          {val}
        </span>
      );
    case "admin":
      return (
        <span className="rounded-lg border border-yellow-800 bg-yellow-300 px-3 py-2 text-yellow-800">
          {val}
        </span>
      );
    default:
      return (
        <span className="rounded-lg border border-gray-500 bg-gray-300 px-3 py-2 text-gray-500">
          {val}
        </span>
      );
  }
}
const columns: ColumnDef<DataType>[] = [
  {
    header: "Name",
    accessorKey: "username",
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        <Image
          src={`/user.png`}
          alt={row.getValue("username")}
          width={50}
          height={50}
          className="h-12 w-12 rounded-full"
        />
        <span className="">{row.getValue("username") ?? "N/A"}</span>
      </div>
    ),
  },
  {
    header: "Gender",
    accessorKey: "gender",
    cell: ({ row }) => <span>{row.getValue("gender") ?? "N/A"}</span>,
  },
  {
    header: "Mat No",
    accessorKey: "matNumber",
    cell: ({ row }) => <span>{row.getValue("matNumber") ?? "N/A"}</span>,
  },
  {
    header: "Role",
    accessorKey: "role",
    cell: ({ row }) => renderRole(row.getValue("role") ?? "N/A"),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-auto w-6" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="leading-8" />
            <DropdownMenuItem>
              <Link href={`/dispatch-management/dashboard/agents/${user.id || ""}`}>
                View User
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Remove User</DropdownMenuItem>
            <DropdownMenuItem className="leading-8" />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
const AdminUser: FC = () => {
  const [search, setSearch] = useState<string>("");
  const { data: allUsers } = useGetAllUsersQuery(undefined);
  console.log(allUsers);
  // const data = [...transFormToTableData(AgentData?.data?.data ?? []), ...transFormToTableData(AgentData?.data?.data ?? [])];

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const table = useReactTable({
    data:
      allUsers?.map((user) => ({
        id: user._id,
        username: user?.username ?? "N/A",
        user_image: "N/A",
        gender: "N/A",
        matNumber: user?.matNumber ?? "N/A",
        role: user?.role ?? "N/A",
      })) ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [matNo, setMatNo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="mx-auto mt-8 w-11/12">
      <div className="flex items-center space-x-1 text-blue-600">
        <UsersIcon className="h-7 w-auto stroke-blue-600" />
        <span className="text-2xl">Users</span>
      </div>
      <div className="mt-4 flex h-fit w-full items-stretch justify-between">
        <input
          placeholder="search"
          type="text"
          className="text-bold h-fit basis-[70%] rounded-lg border-2 border-transparent bg-grey-600 py-2 pl-3 pr-12 font-sans text-lg text-blue-placeholder-600 placeholder-blue-placeholder-600 placeholder-opacity-70 transition-colors duration-300 ease-in placeholder:text-lg placeholder:text-grey-800 focus:border-blue-500 focus:outline-none focus:ring-blue-500 data-true:border-red-500/75"
        />
        <div className="flex h-auto basis-[10%] items-center  space-x-3  rounded-lg bg-grey-600 px-4 py-2.5">
          <FilterIcon className="h-auto w-4" />
          <span>Filter</span>
        </div>
        <Sheet>
          <SheetTrigger className="h-auto self-stretch">
            <button className="flex h-full w-max items-center space-x-2 rounded-lg bg-blue-600 px-3 font-medium text-white">
              <AddIcon className="h-auto w-6" />
              <span>Add User</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <h1 className="text-xl font-medium">Add New User</h1>
            <div className="py-8">
              <TextInput
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // error={error}
                // errorObj={true}
                placeholder="Username"
                className="mb-4 pl-4 text-base"
              />
              <TextInput
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // error={error}
                // errorObj={true}
                placeholder="Email"
                className="mb-4 pl-4 text-base"
              />
              <TextInput
                type="text"
                value={matNo}
                onChange={(e) => setMatNo(e.target.value)}
                // error={error}
                // errorObj={true}
                placeholder="Username"
                className="mb-4 pl-4 text-base"
              />
              <PasswordInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // error={error}
                // errorObj={true}
                placeholder="Password"
                className="mb-4 pl-4 text-base"
                iconClassName="space-y-4 h-6 w-auto -top-3 bottom-0"
                hideIcon
              />
              <Button
                text="Add User"
                className="mt-6 py-4 text-base font-normal"
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="py-8">
        <TableElement table={table} columns_length={columns.length} />
      </div>
    </div>
  );
};

export default AdminUser;
