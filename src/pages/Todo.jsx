import { useState, useEffect } from 'react'
import useCrud from '../scripts/crud.js'
import DataTable from '../components/Datatable.jsx'
import CardBasic from '../components/BasicCard.jsx'
import BasicInput from '../components/BasicInput.jsx'
import CustomButton from '../components/CustomButton.jsx'
import ToggleSwitch from '../components/ToggleSwitch.jsx'

function Todo() {
    const { index, store, show, update, destroy } = useCrud()
    const head = ['Id', 'Goal', 'Completion Status', 'Action']
    const [data, setData] = useState([]);
    const [goal, setGoal] = useState("");
    // const [todo, setTodo] = useState({id: null, goal:null, status:false});
    const [todo, setTodo] = useState({});
    const [storeArea, setStoreArea] = useState(true);
    const [editArea, setEditArea] = useState(false);

    const getData = () => {
        setData(index().sort((a, b) => b.id - a.id));
    };

    const storeTodo = () => {
        let todo = {
            goal: goal,
            status: false
        }
        store(todo)
        setGoal("")
        getData()
    };

    const showTodo = (id) => {
        setStoreArea(false)
        setEditArea(true)
        setTodo(show(id))
    }

    const updateTodo = () => {
        update(todo.id, todo)
        getData()
    }

    const updateStatus = (id) => {
        const todoToUpdate = show(id);
        const updatedTodo = { ...todoToUpdate, status: !todoToUpdate.status };
        setTodo((prevTodo) => {
          const newTodo = { ...prevTodo, ...updatedTodo };
          return newTodo;
        });
        updateTodo();
      };

      const cancel = () => {
        setTodo({})
        setEditArea(false)
        setStoreArea(true)
    }

    useEffect(() => {
        getData();
    }, []);

    
    return (
        <div>
            <CardBasic title="Todo App" customStyle={{ header: 'text-center' }} glow>
                {storeArea && !editArea &&  (
                    <div className="flex flex-col sm:flex-row mb-6">
                        <BasicInput label="Save Goal" className="max-w-6xl" modelValue={goal} onUpdate={setGoal} onKeyUp={(e) => { if (e.key === 'Enter') storeTodo() }} />
                        <CustomButton color="theme" className="flex-1 mt-4 sm:mt-0 ml-0 sm:ml-4"  onClick={storeTodo}>Add</CustomButton>
                    </div>
                )}
                {editArea && !storeArea &&(
                    <div className="flex flex-col sm:flex-row mb-6">
                        <BasicInput label="Save Goal" className="max-w-6xl" modelValue={todo.goal}  onUpdate={(value) => setTodo({...todo, goal: value})} onKeyUp={(e) => { if (e.key === 'Enter') updateTodo() }} />
                        <CustomButton color="secondary" className="flex-1 mt-4 sm:mt-0 ml-0 sm:ml-4"  onClick={updateTodo}>Update</CustomButton>
                        <CustomButton color="danger" className="flex-1 mt-4 sm:mt-0 ml-0 sm:ml-4"  onClick={cancel}>Cancel</CustomButton>
                    </div>
                )}
                <DataTable head={head}>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.goal}</td>
                            <td>
                            <ToggleSwitch
                                color="primary"
                                modelValue={item.status}
                                onUpdate:modelValue={() => updateStatus(item.id)}
                            />
                            </td>
                            <td className="flex flex-col md:flex-row">
                                <CustomButton onClick={() => {showTodo(item.id)}}>Update</CustomButton>
                                <CustomButton className="mt-4 md:mt-0 ml-0 md:ml-4" color="danger" onClick={() => showTodo(item.id)}>Delete</CustomButton>
                            </td>
                        </tr>
                    ))}
                </DataTable>
            </CardBasic>
        </div>
    )
}

export default Todo
