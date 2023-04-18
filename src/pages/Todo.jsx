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
        // cancel()
        getData()
    }

    const updateStatus = (id) => {
        console.log(id)
        const todoCopy = { ...show(id) };
        todoCopy.status = !todoCopy.status;
        setTodo(todoCopy);
        updateTodo();
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <BasicInput label="Save Goal" className="max-w-6xl" value={goal} onUpdate={setGoal} onKeyUp={(e) => { if (e.key === 'Enter') storeTodo() }} />
            <CardBasic title="Todo App" customStyle={{ header: 'text-center' }} glow>
                <DataTable head={head}>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.goal}</td>
                            <td>
                                <ToggleSwitch value={item.status} onChange={() => updateStatus(item.id)} />
                            </td>
                            <td className="flex flex-col md:flex-row">
                                <CustomButton onClick={() => showTodo(item.id)}>Update</CustomButton>
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
