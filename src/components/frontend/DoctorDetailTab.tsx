import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Availability from '../Availability'

export function DoctorDetailTab() {
  return (
    <Tabs defaultValue="service" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger className='tracking-widest' value="service">Service Details</TabsTrigger>
        <TabsTrigger  className='tracking-widest' value="availability">Availability</TabsTrigger>
      </TabsList>
      <TabsContent value="service">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="availability">
        <Card>
          <CardHeader>
            <CardTitle className='text-xl uppercase text-slate-500 tracking-widest'>Select a Date and Time</CardTitle>
           
          </CardHeader>
          <CardContent className="space-y-2 p-0 sm:p-2 md:p-6  ">
            <Availability/>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
