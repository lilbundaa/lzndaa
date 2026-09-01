self.addEventListener('push', function(e) {
    var d = e.data;
    if (!d || !d.notification) return;
    var n = d.notification;
    self.registration.showNotification(n.title || 'Mood Update', {
        body: n.body || '', icon: n.icon || '💬', click_action: 'FLIP'
    });
    self.addEventListener('notificationclick', function() {
        self.open('/');
    });
});
self.registration.addEventListener('push', function() {
    self.registration.showNotification('Mood Update', {});
});
