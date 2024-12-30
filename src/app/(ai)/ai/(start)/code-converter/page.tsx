import { CopyIcon, DingIcon, DownloadIcon } from '@/app/(ai)/ai/components/icons';
import { Title } from '@/app/(ai)/ai/components/wrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export default function CodeConverterPage() {
  return (
    <ResizablePanelGroup direction="horizontal" className="w-full rounded-lg">
      <ResizablePanel defaultSize={70}>
        <div className="lg:shadow-xs flex h-full flex-col overflow-hidden bg-white dark:border-gray-700 dark:bg-gray-900 lg:rounded-2xl lg:border lg:border-gray-200 lg:dark:shadow-xl">
          <div className="flex flex-1 flex-col space-y-6 overflow-y-auto p-4 sm:p-6">
            <Title
              title="Converter"
              description="Seamlessly transform code across languages and frameworks with AI."
            />
            <hr className="border-gray-200 dark:border-gray-700" />

            <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col justify-start space-y-4">
                <div className="relative block text-left">
                  <Button variant="outline"> 选择语言</Button>
                </div>
                <div className="relative flex-1">
                  <div
                    id="input-code-editor"
                    className="ring-outset h-full min-h-64 w-full resize-y rounded-xl border-0 p-0 font-mono shadow-sm ring-1 ring-gray-300 transition-all duration-200 dark:ring-gray-700"
                  >
                    textinput
                  </div>
                  <div className="absolute bottom-2 right-1 z-10 p-3">
                    <div className="flex items-center justify-end gap-3">
                      <label className={buttonVariants({ variant: 'outline' })}>
                        Have a file?
                        <span className="pl-1 font-normal text-green-600 dark:text-green-500">
                          Upload
                        </span>
                        <input className="hidden" type="file" />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <div className="flex items-center gap-4">
                    <Button variant="outline"> Reset</Button>
                    <Button className="w-full rounded-sm bg-green-500 shadow-sm hover:bg-green-600 focus-visible:outline-green-600 dark:bg-green-600 dark:hover:bg-green-500 dark:focus-visible:outline-green-500">
                      Convert
                    </Button>
                  </div>
                </div>
              </div>
              <div className="md:hidden">
                <hr className="border-gray-200 dark:border-gray-700" />
              </div>
              <div className="flex flex-col justify-start space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="relative block text-left">
                    <Button variant="outline"> Ads</Button>
                  </div>
                  <Button variant="outline">
                    <DingIcon className="size-5" />
                    Unpin this Tool
                  </Button>
                </div>
                <div className="relative flex-1">
                  <div
                    id="input-code-editor"
                    className="ring-outset h-full min-h-64 w-full resize-y rounded-xl border-0 p-0 font-mono shadow-sm ring-1 ring-gray-300 transition-all duration-200 dark:ring-gray-700"
                  >
                    textinput
                  </div>
                  <div className="absolute bottom-2 right-0 z-10 p-3">
                    <div className="flex items-center justify-end gap-3">
                      <Button variant="outline" className="px-2.5">
                        <CopyIcon className="size-5" />
                        <span className="sr-only">Copy</span>
                      </Button>

                      <Button variant="outline" className="px-2.5">
                        <DownloadIcon className="size-5" />
                        <span className="sr-only">Download</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle className="mx-4" />
      <ResizablePanel defaultSize={30}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
