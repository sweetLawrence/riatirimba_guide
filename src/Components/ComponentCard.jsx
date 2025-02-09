// const ComponentCard = ({ item }) => {
//     return (
//         <div className="component-card">
//             <img src={item.imageUrl} alt={item.name} />
//             <h3>{item.name}</h3>
//             <a href={item.url} target="_blank" rel="noopener noreferrer">Read More</a>
//         </div>
//     );
// };

// export default ComponentCard;





const ComponentCard = ({ item }) => {
    return (
        <div className="component-card">
            <img className="component-image" src={item.imageUrl} alt={item.name} />
            <div className="component-details">
                <h3 className="component-name">{item.name}</h3>
                <a className="read-more" href={item.url} target="_blank" rel="noopener noreferrer">
                    Read More →
                </a>
            </div>
        </div>
    );
};

export default ComponentCard;
