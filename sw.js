// 알림을 받아서 보여 주는 서비스 워커
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { title: '우리 아카이브', body: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(d.title || '우리 아카이브', {
    body: d.body || '', icon: 'icon-192.png', badge: 'icon-192.png', tag: d.tag || undefined,
    data: { path: d.path || '' }
  }));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = self.registration.scope + (e.notification.data && e.notification.data.path ? '#' + e.notification.data.path : '');
  e.waitUntil((async () => {
    const list = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of list) { if (c.url.startsWith(self.registration.scope)) { await c.focus(); c.postMessage({ type: 'go', path: e.notification.data.path }); return; } }
    await self.clients.openWindow(url);
  })());
});
