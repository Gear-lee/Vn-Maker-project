document.write(`
<div class="fixed bottom-0 left-0 w-full bg-[#0b071e]/90 backdrop-blur-xl border-t border-white/5 p-3 flex justify-around items-center z-50">
    <button onclick="window.location.href='/ui/explore.html'" class="text-slate-400 hover:text-white transition-all text-xs">Explore</button>
    <button onclick="window.location.href='/ui/dashboard.html'" class="text-slate-400 hover:text-white transition-all text-xs">Project</button>
    <button onclick="window.location.href='/ui/create.html'" class="mx-2 bg-gradient-to-r from-pink-600 to-purple-600 p-3 rounded-2xl text-white shadow-lg shadow-pink-500/20 active:scale-95 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </button>
    <button onclick="window.location.href='/ui/profile.html'" class="text-slate-400 hover:text-white transition-all text-xs">Profile</button>
</div>
`);
