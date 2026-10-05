// ==========================================
//   AHIFM ERP - Custom JavaScript
// ==========================================

// ১. মডাল (Popup) ওপেন করার ফাংশন
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

// ২. মডাল (Popup) বন্ধ করার ফাংশন
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

// ৩. টেবিলের রিয়েল-টাইম সার্চ বা ফিল্টার করার ফাংশন
// ব্যবহার: searchTable('searchInput', 'myTable', 1) -> এখানে 1 হলো কলাম ইনডেক্স (নামের কলাম)
function searchTable(inputId, tableId, columnIndex = 1) {
    const input = document.getElementById(inputId);
    const filter = input.value.toLowerCase();
    const table = document.getElementById(tableId);
    const trs = table.getElementsByTagName('tr');

    for (let i = 1; i < trs.length; i++) {
        let td = trs[i].getElementsByTagName('td')[columnIndex];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                trs[i].style.display = "";
            } else {
                trs[i].style.display = "none";
            }
        }
    }
}

// ৪. পেজ লোড হওয়ার পর বেসিক অ্যালার্ট বা মেসেজ দেখানোর জন্য
document.addEventListener("DOMContentLoaded", function() {
    console.log("AHIFM ERP System JavaScript Loaded Successfully!");
});
