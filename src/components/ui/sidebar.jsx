
import * as React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const SidebarContext = React.createContext(null);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

export const SidebarProvider = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);

    return (
      <SidebarContext.Provider value={{ isMobile, openMobile, setOpenMobile }}>
        <div
          ref={ref}
          className={cn("flex min-h-screen w-full flex-col md:flex-row", className)}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    );
  }
);
SidebarProvider.displayName = "SidebarProvider";

export const Sidebar = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { isMobile, openMobile } = useSidebar();

    if (isMobile && !openMobile) return null;

    return (
      <aside
        ref={ref}
        className={cn(
          "w-64 bg-card text-card-foreground border-r shrink-0 transition-all duration-300 flex flex-col",
          className
        )}
        {...props}
      >
        {children}
      </aside>
    );
  }
);
Sidebar.displayName = "Sidebar";
