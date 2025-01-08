import { Outlet, useMatches } from "react-router-dom";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar.js";
import { AppSidebar } from "./components/app-sidebar.js";
import { Separator } from "./components/ui/separator.js";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb.js";

function App() {
  const matches = useMatches();
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {matches &&
                  matches.map((item, index: number) => (
                    <>
                      {index != 0 && (
                        <BreadcrumbSeparator className="hidden md:block" />
                      )}
                      <BreadcrumbItem className="hidden md:block">
                        {index === matches.length - 1 ? (
                          <BreadcrumbPage>{item.handle.title}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink href={item.pathname}>
                            {item.handle.title}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </>
                  ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
