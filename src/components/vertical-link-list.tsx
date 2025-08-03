import type { LinkItem } from "@/shared/types"

export default function VerticalLinkList({title, data}: {title?: string, data: LinkItem[]}){
    return (
        <div>
            {title && <h3>{title}</h3>}
            <ul>
                {data.map((item,idx) => (
                    <li key={idx}>
                        <a href={item.href}> {item.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}