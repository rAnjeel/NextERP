// erpnext/public/js/welcome_message.js
frappe.provide('erpnext');

erpnext.show_welcome_message = function() {
    // Vérifier si le message a déjà été affiché dans cette session
    if (!sessionStorage.getItem('welcome_message_shown')) {
        frappe.msgprint({
            title: __('Bienvenue'),
            message: __('Bienvenue dans votre ERP! Nous sommes ravis de vous revoir.'),
            indicator: 'green'
        });
        
        // Marquer le message comme affiché pour cette session
        sessionStorage.setItem('welcome_message_shown', '1');
    }
}

// Ajouter l'événement au hook after_login
frappe.ui.form.on('User', {
    after_login: function() {
        erpnext.show_welcome_message();
    }
});