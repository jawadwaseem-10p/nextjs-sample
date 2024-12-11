export default function MealItem({params}) {
    return (
        <>
        <h2>All about ${params.mealid} </h2>
        <p>Looking for a great meal in the town? {params.mealid} is the answer</p>
        </>
    )
}