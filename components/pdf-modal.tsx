"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface PDFModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  pdfUrl: string
  title: string
}

export function PDFModal({ open, onOpenChange, pdfUrl, title }: PDFModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] w-full p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6">
          <iframe
            src={`${pdfUrl}#toolbar=1`}
            className="w-full h-[70vh] border border-border rounded-md"
            title={title}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

