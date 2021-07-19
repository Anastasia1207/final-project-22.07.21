


function InformationTab1({articles}) {
   const articlesTabs = articles.map((articles, index) => {

    return (
        <tr>
        <td><img  src={articles.image} style={{paddingLeft: '5px',paddingRight: '25px', paddingBottom: '5px', paddingTop: '5px',}} /></td>
        <td>  {articles.text}</td>
        </tr>
    )
})

return (
    <table className="table border border-dark"  >
        <tbody>
            {articlesTabs}
        </tbody>
    </table>
)
}
export default InformationTab1;

