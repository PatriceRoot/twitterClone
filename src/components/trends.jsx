import Search from "./trends/search"
import Trend from "./trends/trend"

export default function Trends(){
    return (
        <div className="trends">
            <Search />
            <Trend />
        </div>
    )
}