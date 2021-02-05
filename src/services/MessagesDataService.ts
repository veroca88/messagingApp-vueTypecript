import http from "../http-common";

class MessagesDataServices {
    getAll() {
        return http.get("/messages")
    }

    get(id: string) {
        return http.get(`/messages/${id}`)
    }

    create(data: any) {
        return http.post("/messages", data)
    }

    update(id: string, data: any) {
        return http.put(`/messages/${id}`, data)
    }

    delete(id: string) {
        return http.delete(`/messages/${id}`)
    }

    deleteAll() {
        return http.delete('/messages')
    }

    findByTitle(title: string) {
        return http.get(`/messages?title=${title}`)
    }
}

export default new MessagesDataServices()