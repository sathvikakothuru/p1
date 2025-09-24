document.addEventListener('DOMContentLoaded', () => {
    // Check which page we are on by looking for a unique element
    const dashboardContainer = document.querySelector('.dashboard-container');
    const staffDashboardContainer = document.querySelector('.staff-dashboard-container');

    if (dashboardContainer) {
        // --- This code runs on the student dashboard page (main.html) ---
        const dynamicContent = document.getElementById('dynamic-content');
        const logoutLink = document.querySelector('a[href="#"]');

        const studentData = {
            attendance: [
                { subject: "Web Dev", status: "Present", date: "2025-09-22" },
                { subject: "Data Structures", status: "Absent", date: "2025-09-21" },
                { subject: "Calculus", status: "Present", date: "2025-09-20" }
            ],
            cafeteria: [
                { item: "Grilled Chicken", price: "₹80" },
                { item: "Vegetable Biryani", price: "₹65" },
                { item: "Fresh Juice", price: "₹30" }
            ],
            timetable: [
                { day: "Monday", time: "09:00 - 10:00", subject: "Web Dev" },
                { day: "Tuesday", time: "11:00 - 12:00", subject: "Data Structures" },
                { day: "Wednesday", time: "14:00 - 15:00", subject: "Calculus" },
                { day: "Thursday", time: "10:00 - 11:00", subject: "Physics" },
                { day: "Friday", time: "09:00 - 10:00", subject: "Web Dev" }
            ],
            library: [
                { title: "HTML & CSS", author: "Jon Duckett", status: "Available" },
                { title: "JavaScript: The Good Parts", author: "Douglas Crockford", status: "Loaned" },
                { title: "Python Crash Course", author: "Eric Matthes", status: "Available" }
            ],
            events: [
                { name: "Code-a-thon", date: "2025-10-10", location: "Auditorium" },
                { name: "Campus Fest", date: "2025-10-25", location: "Main Ground" },
                { name: "Sports Day", date: "2025-11-05", location: "Stadium" }
            ],
            skills: [
                { skill: "JavaScript", level: "Intermediate", courses: ["Advanced JS", "React.js Workshop"] },
                { skill: "Python", level: "Beginner", courses: ["Python Fundamentals", "Data Science with Python"] }
            ]
        };

        // Add event listeners for the dashboard cards to display dynamic content
        document.getElementById('attendance-card').addEventListener('click', () => {
            let html = '<h2>Your Attendance</h2><ul class="content-list">';
            studentData.attendance.forEach(item => {
                html += `<li><strong>${item.subject}:</strong> ${item.status} (${item.date})</li>`;
            });
            html += '</ul>';
            dynamicContent.innerHTML = html;
        });

        document.getElementById('cafeteria-card').addEventListener('click', () => {
            let html = '<h2>Today\'s Cafeteria Menu</h2><ul class="content-list">';
            studentData.cafeteria.forEach(item => {
                html += `<li><span>${item.item} - ${item.price}</span> <button>Order</button></li>`;
            });
            html += '</ul>';
            dynamicContent.innerHTML = html;
        });

        document.getElementById('timetable-card').addEventListener('click', () => {
            let html = '<h2>Your Timetable</h2><table class="timetable-table"><thead><tr><th>Day</th><th>Time</th><th>Subject</th></tr></thead><tbody>';
            studentData.timetable.forEach(item => {
                html += `<tr><td>${item.day}</td><td>${item.time}</td><td>${item.subject}</td></tr>`;
            });
            html += '</tbody></table>';
            dynamicContent.innerHTML = html;
        });

        document.getElementById('library-card').addEventListener('click', () => {
            let html = '<h2>Library Books</h2><ul class="content-list">';
            studentData.library.forEach(item => {
                html += `<li><span>${item.title} by ${item.author} (${item.status})</span>`;
                if (item.status === 'Available') {
                    html += `<button>Book Now</button>`;
                }
                html += `</li>`;
            });
            html += '</ul>';
            dynamicContent.innerHTML = html;
        });

        document.getElementById('events-card').addEventListener('click', () => {
            let html = '<h2>Upcoming Events</h2><ul class="content-list">';
            studentData.events.forEach(item => {
                html += `<li><span>${item.name} on ${item.date} at ${item.location}</span> <button>Enroll</button></li>`;
            });
            html += '</ul>';
            dynamicContent.innerHTML = html;
        });
        
        document.getElementById('skills-card').addEventListener('click', () => {
            let html = '<h2>Your Skills & Courses</h2><ul class="content-list">';
            studentData.skills.forEach(item => {
                const courses = item.courses.join(', ');
                html += `<li><strong>${item.skill}:</strong> ${item.level} <br> <em>Courses: ${courses}</em></li>`;
            });
            html += '</ul>';
            dynamicContent.innerHTML = html;
        });

        // Add a click event listener for the logout link
        if (logoutLink) {
            logoutLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'index.html';
            });
        }
        
    } else if (staffDashboardContainer) {
        // --- This code runs on the staff dashboard page (staff_dashboard.html) ---
        const dynamicContent = document.getElementById('dynamic-content');
        const logoutLink = document.querySelector('a[href="#"]');

        const staffData = {
            timetable: [
                { day: "Monday", time: "09:00 - 10:00", subject: "Web Development" },
                { day: "Tuesday", time: "11:00 - 12:00", subject: "Data Structures" },
                { day: "Wednesday", time: "14:00 - 15:00", subject: "Project Meeting" },
                { day: "Thursday", time: "10:00 - 11:00", subject: "Office Hours" },
                { day: "Friday", time: "09:00 - 10:00", subject: "Web Development" }
            ],
            cafeteria: [
                { item: "Grilled Chicken", price: "₹80" },
                { item: "Vegetable Biryani", price: "₹65" },
                { item: "Fresh Juice", price: "₹30" }
            ],
            library: [
                { title: "HTML & CSS", author: "Jon Duckett", status: "Available" },
                { title: "JavaScript: The Good Parts", author: "Douglas Crockford", status: "Loaned" },
                { title: "Python Crash Course", author: "Eric Matthes", status: "Available" }
            ]
        };

        document.getElementById('timetable-card').addEventListener('click', () => {
            let html = '<h2>Your Timetable</h2><table class="timetable-table"><thead><tr><th>Day</th><th>Time</th><th>Subject</th></tr></thead><tbody>';
            staffData.timetable.forEach(item => {
                html += `<tr><td>${item.day}</td><td>${item.time}</td><td>${item.subject}</td></tr>`;
            });
            html += '</tbody></table>';
            dynamicContent.innerHTML = html;
        });

        document.getElementById('cafeteria-card').addEventListener('click', () => {
            let html = '<h2>Cafeteria Menu</h2><ul class="content-list">';
            staffData.cafeteria.forEach(item => {
                html += `<li><span>${item.item} - ${item.price}</span> <button>Order</button></li>`;
            });
            html += '</ul>';
            dynamicContent.innerHTML = html;
        });

        document.getElementById('library-card').addEventListener('click', () => {
            let html = '<h2>Library Books</h2><ul class="content-list">';
            staffData.library.forEach(item => {
                html += `<li><span>${item.title} by ${item.author} (${item.status})</span>`;
                if (item.status === 'Available') {
                    html += `<button>Pre-book</button>`;
                }
                html += `</li>`;
            });
            html += '</ul>';
            dynamicContent.innerHTML = html;
        });
        
        // Add a click event listener for the logout link
        if (logoutLink) {
            logoutLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'index.html';
            });
        }

    } else {
        // --- This is the login page logic (index.html) ---
        const studentLoginBtn = document.querySelector('.student-login-btn');
        const staffLoginBtn = document.querySelector('.staff-login-btn');
        const studentForm = document.getElementById('student-form');
        const staffForm = document.getElementById('staff-form');
        const backButtons = document.querySelectorAll('.back-btn');
        const submitButtons = document.querySelectorAll('.submit-btn');

        function showForm(form) {
            document.getElementById('role-selection').classList.add('hidden');
            document.getElementById('login-forms').classList.remove('hidden');
            form.classList.remove('hidden');
        }

        function showRoleSelection() {
            document.getElementById('role-selection').classList.remove('hidden');
            document.getElementById('login-forms').classList.add('hidden');
            studentForm.classList.add('hidden');
            staffForm.classList.add('hidden');
        }

        studentLoginBtn.addEventListener('click', () => showForm(studentForm));
        staffLoginBtn.addEventListener('click', () => showForm(staffForm));

        backButtons.forEach(button => {
            button.addEventListener('click', () => showRoleSelection());
        });

        submitButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const form = button.closest('.login-form');
                const usernameInput = form.querySelector('input[type="text"]').value;
                const passwordInput = form.querySelector('input[type="password"]').value;

                if (form.id === 'student-form' && usernameInput === 'student' && passwordInput === '123') {
                    window.location.href = 'main.html';
                } else if (form.id === 'staff-form' && usernameInput === 'staff' && passwordInput === '123') {
                    window.location.href = 'staff_dashboard.html';
                } else {
                    alert('Invalid credentials. Please try again.');
                }
            });
        });
    }
});