export default function useCrud() {

    const index = () => {
        return JSON.parse(localStorage.getItem('todos')) ?? []
    }

    const store = (item) => {
        const data = index()
        const lastId = getLastId()
        const newData = {
            id: parseInt(lastId) + 1,
            ...item
        }
        data.push(newData)
        write(data);
    }

    const show = (id) => {
        const data = index()
        return data.find(data => data.id === id)
    }

    const update = (id, item) => {
        const data = index()
        const todoIndex = data.findIndex(item => item.id === id)
        data[todoIndex] = { ...data[todoIndex], ...item }
        write(data)
    }

    const destroy = (id) => {
        const data = index()
        const filteredData = data.filter(item => item.id !== id);
        write(filteredData);
    }

    const getLastId = () => {
        const items = index()
        if (items?.length > 0) {
            const lastItem = items[items.length - 1]
            return lastItem.id
        } else {
            return 0
        }
    }

    const write = (data) => {
        localStorage.setItem('todos', JSON.stringify(data));
    }


    return {
        index,
        store,
        show,
        update,
        destroy,
    }

}