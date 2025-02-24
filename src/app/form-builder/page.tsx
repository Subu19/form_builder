"use client"
import { FormBuilderMain, type FormElementsProps } from '@/components/form-builder/components/form-builder-main';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import ReactJson from 'react-json-view'

export default function FormBuilderPage() {
  const [json, setJson] = useState<FormElementsProps>([]);
  const [isOpen, setOpen] = useState(false);
  const handleCreate = (formElement: FormElementsProps) => {
    console.log(formElement);
    setJson(formElement);
    setOpen(true);
  }
  return <div className='p-10'>
    <FormBuilderMain handleCreate={handleCreate} />
    <Dialog open={isOpen}>

      <DialogContent className='p-1'>
        <DialogHeader className='p-3'>
          <DialogTitle>Json Preview</DialogTitle>
        </DialogHeader>
        <ScrollArea style={{
          height: '100%',
          maxHeight: '70vh',
        }}>
          <DialogDescription className='p-3'>
            <ReactJson displayDataTypes={false} theme={"ocean"} enableClipboard={false} src={json} />
          </DialogDescription>
        </ScrollArea>
        <DialogFooter className='p-3'>
          <DialogClose>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogClose>
        </DialogFooter>

      </DialogContent>

    </Dialog>
  </div>
}
