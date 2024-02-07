
export const FilterCardComponent = ({FilteredCardList}) => {
    return (
        <>
            <div className='row' style={{ marginTop: "90px", border:'2px solid red'}}>
                {
                    FilteredCardList.map(item => {
                        return (
                            <div key={item._id} className="col-sm-3 card">
                                <img style={{ width: "100%", height: "250px" }} src={`http://localhost:3000/upload/image/${item.image}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p>{item.author}</p>
                                    <p className="card-text">{item.description}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </>
    )

}
