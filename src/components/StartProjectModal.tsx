
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Define the form schema with validation
const formSchema = z.object({
  projectName: z.string().min(3, { message: "Project name must be at least 3 characters" }),
  churchName: z.string().min(3, { message: "Church name must be at least 3 characters" }),
  amount: z.string().min(1, { message: "Amount is required" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  file: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface StartProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StartProjectModal = ({ open, onOpenChange }: StartProjectModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      churchName: "",
      amount: "",
      description: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    form.setValue("file", file);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Here you would normally send the data to your API
      console.log("Form submitted with:", data);
      console.log("Selected file:", selectedFile);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Project submission successful!",
        description: "Your church project has been submitted for review.",
      });
      
      // Reset form and close modal
      form.reset();
      setSelectedFile(null);
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your church project.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center font-playfair text-2xl text-navy">Start a Church Project</DialogTitle>
          <DialogDescription className="text-center">
            Fill out the form below to submit your church project for funding.
          </DialogDescription>
        </DialogHeader>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter project name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="churchName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Church Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter church name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Amount (USD)</FormLabel>
                  <FormControl>
                    <Input 
                      type="text"
                      placeholder="0.00" 
                      {...field}
                      onChange={(e) => {
                        // Only allow numbers and decimal point
                        const value = e.target.value.replace(/[^0-9.]/g, '');
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your project and how the funds will be used" 
                      className="min-h-[120px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="file"
              render={() => (
                <FormItem>
                  <FormLabel>Attach File (Image, PDF, etc.)</FormLabel>
                  <FormControl>
                    <Input 
                      type="file" 
                      onChange={handleFileChange}
                      accept="image/*,.pdf,.doc,.docx"
                    />
                  </FormControl>
                  {selectedFile && (
                    <p className="text-sm text-muted-foreground">
                      File selected: {selectedFile.name}
                    </p>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-center pt-4">
              <Button 
                type="submit" 
                className="bg-gold hover:bg-gold/90 text-white w-full md:w-1/2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Project"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default StartProjectModal;
