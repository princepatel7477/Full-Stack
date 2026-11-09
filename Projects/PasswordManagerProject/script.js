
function togglePassword(id, btn) {
    const input = document.getElementById(id);
    const icon = btn.querySelector("i");

    if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("bi-eye", "bi-eye-slash");
    } else {
        input.type = "password";
        icon.classList.replace("bi-eye-slash", "bi-eye");
    }
}

const LOCAL_STORAGE_DATA_KEY = "PasswordManagerData";

function ClearForm() {
    document.getElementById("websiteName").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("password").value = "";
    document.getElementById("cfPassword").value = "";
}

function SavePassword() {
    const wn = document.getElementById("websiteName").value.trim();
    const un = document.getElementById("userName").value.trim();
    const ps = document.getElementById("password").value;
    const cps = document.getElementById("cfPassword").value;

    if (!wn || !un || !ps || !cps) {
        alert("All fields Required");
        return;
    }
    if (ps !== cps) {
        alert("Password and Confirm Password Not Match");
        return;
    }
    const newPacket = {
        id: Math.floor(Math.random() * 100000),
        websiteName: wn,
        userName: un,
        password: ps,
        cfPassword: cps,
    };
    const localStorageData =
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];

    localStorageData.push(newPacket);

    localStorage.setItem(
        LOCAL_STORAGE_DATA_KEY,
        JSON.stringify(localStorageData)
    );

    RenderData();
    ClearForm();
}

function RenderData() {
    const localStorageData =
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];

    const TableBody = document.getElementById("dataTable");

    if (localStorageData.length <= 0) {
        TableBody.innerHTML = `
            <tr>
                <td colspan="5">No Saved Password Found</td>
            </tr>
        `;
        return;
    }
    TableBody.innerHTML = "";

    localStorageData.forEach((element, index) => {
        const TR = document.createElement("tr");

        TR.innerHTML = `
            <td>${index + 1}</td>
            <td>${element.websiteName}</td>
            <td>${element.userName}</td>
            <td>${element.password}</td>
            <td>
                <button class="btn btn-warning btn-sm"
                    onclick="EditItem(${element.id})">
                    Edit
                </button>

                <button class="btn btn-danger btn-sm"
                    onclick="DeleteItem(${element.id})">
                    Delete
                </button>
            </td>
        `;

        TableBody.appendChild(TR);
    });
}

RenderData();

function EditItem(ItemID) {
    const data = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_DATA_KEY)
    ) || [];

    const item = data.find(element => element.id === ItemID);

    if (!item) return;

    const wn = prompt("Website Name", item.websiteName);
    if (wn === null) return;

    const un = prompt("Username", item.userName);
    if (un === null) return;

    const ps = prompt("Password", item.password);
    if (ps === null) return;

    const cps = prompt("Confirm Password", item.cfPassword);
    if (cps === null) return;

    if (!wn.trim() || !un.trim() || !ps || ps !== cps) {
        alert("Invalid Data or Password Not Match");
        return;
    }

    const newData = data.map(element =>
        element.id === ItemID
            ? {
                ...element,
                websiteName: wn.trim(),
                userName: un.trim(),
                password: ps,
                cfPassword: cps
            }
            : element
    );
    localStorage.setItem(
        LOCAL_STORAGE_DATA_KEY,
        JSON.stringify(newData)
    );

    RenderData();
    alert("Data Updated Successfully");
}
function DeleteItem(ItemID) {
    const localStorageData =
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];

    if (localStorageData.length <= 0) {
        alert("Nothing to Delete");
        return;
    }

    if (!confirm("Are you sure you want to delete?")) return;

    const newData = localStorageData.filter(
        item => item.id !== ItemID
    );

    localStorage.setItem(
        LOCAL_STORAGE_DATA_KEY,
        JSON.stringify(newData)
    );

    RenderData();
}