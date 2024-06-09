import CategoryItem from "../category-item/category-item.componenet"
import "./category-containter.styles.scss"

const Directory = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Directory