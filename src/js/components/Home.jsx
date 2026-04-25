import { useEffect, useState } from "react";
import "../../styles/index.css"; 

const Home = () => {
    const [list, setList] = useState(["Do the laundry", "Make dinner", "Clean the bathroom"]);
    const [input, setInput] = useState("");
    
    function handleClick() {
        setList([...list, input]);
        setInput(""); 
    }

    const deleteTask = (indexABorrar) => {
        const listaActualizada = list.filter((chores, index) => {
            return index !== indexABorrar; 
        });
        setList(listaActualizada);
    };

    return (
        <div className="todo-container">
            <h1 className="todo-title">To do list</h1>
            
            <div className="input-section">
                <input 
                    type="text"
                    className="todo-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button className="add-btn" onClick={() => handleClick()}>
                    +
                </button>
            </div>
            
            <div className="list-section">
                {
                    list.map((chores, i) => {
                        return (
                            <div key={i} className="todo-item">
                                <span>{chores}</span> 
                                <button 
                                    className="delete-btn"
                                    onClick={() => deleteTask(i)} 
                                >
                                    X
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Home;