// list function
const list = (clients) => {
    return clients.map((client, index) => `
    <li class="list-group-item d-flex justify-content-between" data-index="${index}">
        ${client.name}
        <strong>$${client.balance}</strong>
    </li>`).join("");
}

// order function
const order = (clients, property) => {
    return clients.sort((a, b) => {
        if (a[property]< b[property]) return -1;
        if (a[property]> b[property]) return 1;
        return 0;
    });
}

// total function
const total = (clients) => {
    return clients.reduce((sum, client) => sum + client.balance, 0);
}

// info function
const info = (index) => {
    return clients.find((client, i) => i === index);
}


