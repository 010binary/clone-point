// import { Payment, columns } from "./columns"
import { Payment,columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
      {
        branchName: "Keystone Bank",
        branchAddress: "50,Isaac street Somolu ",
        city: "Lagos",
        customerServiceManager: "Wade Warren",
        operationManager: "John Doe",
      },
      // Duplicate the same data for multiple rows as shown in the image
      {
        branchName: "Keystone Bank",
        branchAddress: "50,Isaac street Somolu",
        city: "Lagos",
        customerServiceManager: "Wade Warren",
        operationManager: "John Doe",
      },
      {
        branchName: "Keystone Bank",
        branchAddress: "50,Isaac street Somolu",
        city: "Lagos",
        customerServiceManager: "Wade Warren",
        operationManager: "John Doe",
      },
      {
        branchName: "Keystone Bank",
        branchAddress: "50,Isaac street Somolu",
        city: "Lagos",
        customerServiceManager: "Wade Warren",
        operationManager: "John Doe",
      },
    ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
