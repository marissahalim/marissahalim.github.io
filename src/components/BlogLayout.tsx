export function BlogLayout({ children }: { children: React.ReactNode }) {
    return <div className="max-w-4xl mx-auto p-8 flex flex-col gap-8">
        {children}
    </div>;
}