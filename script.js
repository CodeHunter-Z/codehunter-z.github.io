const contentItems = document.querySelectorAll('.content-item');
const menuItems = document.querySelectorAll('.menu-item'); // 添加这一行，定义menuItems变量

menuItems.forEach(item => {
    item.addEventListener('click', function () {
        // 移除所有菜单项的active类
        menuItems.forEach(menu => menu.classList.remove('active'));
        // 给当前点击的菜单项添加active类
        this.classList.add('active');

        // 获取目标内容的ID
        const targetId = this.getAttribute('data-target');
        // 移除所有内容项的active类
        contentItems.forEach(content => content.classList.remove('active'));
        // 给目标内容项添加active类
        document.getElementById(targetId).classList.add('active');
    });
});