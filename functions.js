// list function

const list = (clients) => {
    return clients.map((client, index) => `
    <li class="list-group-item d-flex justify-content-between" data-index="${index}">
        ${client.name}
        <strong>$${client.balance}</strong>
    </li>`).join("");
}