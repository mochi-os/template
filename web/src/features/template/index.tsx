import * as React from 'react'
import { MoreHorizontal } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Search } from '@/components/search'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const statuses = [
  { value: 'draft', label: 'Draft' },
  { value: 'review', label: 'In review' },
  { value: 'published', label: 'Published' },
]

const planDetails = [
  { label: 'Current plan', value: 'Core', action: 'Upgrade' },
  { label: 'Expiration date', value: '2025-12-14', action: 'Renew' },
  { label: 'Auto-renewal', value: 'On' },
  { label: 'CPU core', value: '1' },
  { label: 'Memory', value: '4 GB' },
  { label: 'Disk space', value: '50 GB' },
]

const compactRows = [
  { id: '1', status: 'Success', email: 'ken99@example.com', amount: '$316.00' },
  { id: '2', status: 'Success', email: 'abe45@example.com', amount: '$128.00' },
  { id: '3', status: 'Processing', email: 'monserrat44@example.com', amount: '$542.00' },
  { id: '4', status: 'Failed', email: 'carmella@example.com', amount: '$721.00' },
]

export function Template() {
  const [selectedRows, setSelectedRows] = React.useState<string[]>([])

  const allSelected = selectedRows.length === compactRows.length
  const headerChecked = allSelected
    ? true
    : selectedRows.length > 0
      ? 'indeterminate'
      : false

  const toggleRow = (rowId: string, checked: boolean | 'indeterminate') => {
    setSelectedRows((current) => {
      const exists = current.includes(rowId)
      if (checked === true && !exists) {
        return [...current, rowId]
      }

      if (checked === false && exists) {
        return current.filter((id) => id !== rowId)
      }

      return current
    })
  }

  const toggleAll = (checked: boolean | 'indeterminate') => {
    if (checked === true) {
      setSelectedRows(compactRows.map((row) => row.id))
    } else {
      setSelectedRows([])
    }
  }

  return (
    <>
      <Header>
        <Search />
        <div className='ms-auto flex items-center gap-2'>
          <Button variant='outline' size='sm'>
            Readme
          </Button>
          <Button size='sm'>New block</Button>
        </div>
      </Header>

      <Main>
        <div className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Template workspace</CardTitle>
              <CardDescription>
                Minimal examples of form inputs and data tables built with Shadcn UI components.
                Swap the copy, bind fields, or duplicate the sections you need.
              </CardDescription>
            </CardHeader>
          </Card>

          <div className='grid gap-4 lg:grid-cols-2'>
            <Card>
              <CardHeader>
                <CardTitle>Form template</CardTitle>
                <CardDescription>Basic fields ready to wire to your data model.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className='space-y-4'>
                  <div className='grid gap-1.5'>
                    <Label htmlFor='title'>Title</Label>
                    <Input id='title' placeholder='Enter a title' />
                  </div>
                  <div className='grid gap-1.5'>
                    <Label htmlFor='owner'>Owner</Label>
                    <Input id='owner' placeholder='Name or team' />
                  </div>
                  <div className='grid gap-1.5'>
                    <Label htmlFor='status'>Status</Label>
                    <Select defaultValue={statuses[0].value}>
                      <SelectTrigger id='status' className='w-full'>
                        <SelectValue placeholder='Select status' />
                      </SelectTrigger>
                      <SelectContent>
                        {statuses.map((status) => (
                          <SelectItem key={status.value} value={status.value}>
                            {status.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='grid gap-1.5'>
                    <Label htmlFor='notes'>Notes</Label>
                    <Textarea id='notes' placeholder='Add additional context' rows={4} />
                  </div>
                  <div className='flex items-center justify-between rounded-lg border px-3 py-2'>
                    <div>
                      <p className='text-sm font-medium leading-none'>Notify team</p>
                      <p className='text-xs text-muted-foreground'>Send an update when saved.</p>
                    </div>
                    <Switch id='notify' />
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    <Button size='sm'>Save</Button>
                    <Button size='sm' variant='outline'>
                      Reset
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Plan details list</CardTitle>
                <CardDescription>
                  Display key value pairs with lightweight inline actions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='divide-y overflow-hidden rounded-lg border'>
                  {planDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className='flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm'
                    >
                      <p className='font-medium'>{detail.label}</p>
                      <div className='flex items-center gap-2 text-muted-foreground'>
                        <p className='text-sm text-foreground'>{detail.value}</p>
                        {detail.action ? (
                          <Button variant='link' size='sm' className='px-0 text-primary'>
                            {detail.action}
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Compact table</CardTitle>
              <CardDescription>
                Includes multi-select checkboxes and a lightweight action menu per row.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-3'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-10'>
                      <Checkbox
                        aria-label='Select all rows'
                        checked={headerChecked}
                        onCheckedChange={toggleAll}
                      />
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className='text-right'>Amount</TableHead>
                    <TableHead className='w-12 text-right'>
                      <span className='sr-only'>Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {compactRows.map((row) => {
                    const isSelected = selectedRows.includes(row.id)
                    return (
                      <TableRow key={row.id} data-state={isSelected ? 'selected' : undefined}>
                        <TableCell>
                          <Checkbox
                            aria-label={`Select ${row.email}`}
                            checked={isSelected}
                            onCheckedChange={(checked) => toggleRow(row.id, checked)}
                          />
                        </TableCell>
                        <TableCell className='font-medium'>{row.status}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell className='text-right text-sm text-muted-foreground'>
                          {row.amount}
                        </TableCell>
                        <TableCell className='text-right'>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant='ghost' size='icon'>
                                <span className='sr-only'>Open menu</span>
                                <MoreHorizontal className='size-4' />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Copy payment ID</DropdownMenuItem>
                              <DropdownMenuItem>View customer</DropdownMenuItem>
                              <DropdownMenuItem>View payment details</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </Main>
    </>
  )
}
