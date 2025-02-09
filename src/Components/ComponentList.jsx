// import { useState, useEffect } from "react";
// import axios from "axios";
// import ComponentCard from "./ComponentCard";

// const API_URL = "https://offering.pockethost.io/api/collections/guide/records";
// const IMAGE_BASE_URL = "https://offering.pockethost.io/api/files";

// const ComponentList = () => {
//     const [components, setComponents] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios.get(API_URL)
//             .then((response) => {
//                 const itemsWithImageUrl = response.data.items.map(item => ({
//                     ...item,
//                     imageUrl: `${IMAGE_BASE_URL}/${item.collectionId}/${item.id}/${item.image}`
//                 }));

//                 setComponents(itemsWithImageUrl);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//                 setLoading(false);
//             });
//     }, []);

//     return (
//         <div className="component-list">
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 components.map((item) => (
//                     <ComponentCard key={item.id} item={item} />
//                 ))
//             )}
//         </div>
//     );
// };

// export default ComponentList;












// import { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = "https://offering.pockethost.io/api/collections/guide/records";
// const IMAGE_BASE_URL = "https://offering.pockethost.io/api/files";

// const ComponentList = () => {
//     const [components, setComponents] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios.get(API_URL)
//             .then((response) => {
//                 const itemsWithImageUrl = response.data.items.map(item => ({
//                     ...item,
//                     imageUrl: `${IMAGE_BASE_URL}/${item.collectionId}/${item.id}/${item.image}`
//                 }));

//                 setComponents(itemsWithImageUrl);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//                 setLoading(false);
//             });
//     }, []);

//     return (
//         <div className="container">
//             <h1 className="title">Electronics Guide</h1>
//             <p className="subtitle">Find electronic components and learn how to connect them.</p>
            
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <table className="component-table">
//                     <thead>
//                         <tr>
//                             <th>Image</th>
//                             <th>Component Name</th>
//                             <th>Read More</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {components.map((item) => (
//                             <tr key={item.id}>
//                                 <td><img className="component-image" src={item.imageUrl} alt={item.name} /></td>
//                                 <td>{item.name}</td>
//                                 <td>
//                                     <a className="read-more" href={item.url} target="_blank" rel="noopener noreferrer">
//                                         Learn More →
//                                     </a>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default ComponentList;


























import { useState, useEffect } from "react";
import axios from "axios";
import LOGO from '../assets/logo.png'

const API_URL = "https://offering.pockethost.io/api/collections/guide/records";
const IMAGE_BASE_URL = "https://offering.pockethost.io/api/files";

const ComponentList = () => {
    const [components, setComponents] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios.get(API_URL)
            .then((response) => {
                const itemsWithImageUrl = response.data.items.map(item => ({
                    ...item,
                    imageUrl: `${IMAGE_BASE_URL}/${item.collectionId}/${item.id}/${item.image}`
                }));
                setComponents(itemsWithImageUrl);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // Filter components based on search
    const filteredComponents = components.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            {/* Header Section with Logo & Search Bar */}
            <header className="header">
                <div className="logo-container">
                    <img src={LOGO} alt="Logo" className="logo" />

                    <h1 className="title">Electronics Guide</h1>
                </div>
                
                <input
                    type="text"
                    placeholder="Search components..."
                    className="search-bar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </header>

            <p className="subtitle"></p>

            <table className="component-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Component Name</th>
                        <th>Read More</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredComponents.length > 0 ? (
                        filteredComponents.map((item) => (
                            <tr key={item.id}>
                                <td><img className="component-image" src={item.imageUrl} alt={item.name} /></td>
                                <td className="the-name">{item.name}</td>
                                <td>
                                    <a className="read-more" href={item.url} target="_blank" rel="noopener noreferrer">
                                        Learn More →
                                    </a>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="no-results">No components found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ComponentList;
