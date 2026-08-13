(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/analyze/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnalyzePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StatusBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AgentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AgentCard.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Dynamic import of Diff Viewer to prevent SSR issues
const ReactDiffViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-diff-viewer-continued/lib/src/index.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-diff-viewer-continued/lib/src/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center text-slate-500 font-mono text-sm",
            children: "Loading diff viewer..."
        }, void 0, false, {
            fileName: "[project]/app/analyze/[id]/page.tsx",
            lineNumber: 17,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = ReactDiffViewer;
const AGENTS = [
    {
        name: "Scanner",
        emoji: "📚",
        color: "cyan",
        hex: "#06B6D4"
    },
    {
        name: "Explorer",
        emoji: "🌐",
        color: "emerald",
        hex: "#10B981"
    },
    {
        name: "Auditor",
        emoji: "🔍",
        color: "amber",
        hex: "#F59E0B"
    },
    {
        name: "Architect",
        emoji: "🏗️",
        color: "violet",
        hex: "#7C3AED"
    },
    {
        name: "Executor",
        emoji: "🤖",
        color: "rose",
        hex: "#F43F5E"
    }
];
const ALL_SEVEN_AGENTS = [
    {
        name: "Scanner",
        emoji: "📚"
    },
    {
        name: "Explorer",
        emoji: "🌐"
    },
    {
        name: "Auditor",
        emoji: "🔍"
    },
    {
        name: "Architect",
        emoji: "🏗️"
    },
    {
        name: "Executor",
        emoji: "🤖"
    },
    {
        name: "Market",
        emoji: "📊"
    },
    {
        name: "System",
        emoji: "⚙️"
    }
];
const LOG_LEVEL_COLORS = {
    info: "text-slate-350",
    success: "text-emerald-400 font-semibold",
    warning: "text-amber-400",
    error: "text-rose-400 font-bold"
};
function AnalyzePage() {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("running");
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("trace");
    const [activeAgent, setActiveAgent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Scanner");
    const [approving, setApproving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prUrl, setPrUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [approveError, setApproveError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // New state variables
    const [scores, setScores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [securityReport, setSecurityReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [marketReport, setMarketReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [screenshotB64, setScreenshotB64] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyzePage.useEffect": ()=>{
            setIsMounted(true);
        }
    }["AnalyzePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyzePage.useEffect": ()=>{
            if (!id) return;
            const es = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStatusStream"])(id);
            es.onmessage = ({
                "AnalyzePage.useEffect": (e)=>{
                    try {
                        const data = JSON.parse(e.data);
                        setLogs(data.all_logs || []);
                        setStatus(data.status);
                        // Parse root-level SSE fields
                        if (data.scores) setScores(data.scores);
                        if (data.security_report) setSecurityReport(data.security_report);
                        if (data.market_report) setMarketReport(data.market_report);
                        if (data.screenshot_b64) setScreenshotB64(data.screenshot_b64);
                        const allLogs = data.all_logs || [];
                        if (allLogs.length > 0) {
                            // Determine active agent from last log entry where agent !== "System"
                            for(let i = allLogs.length - 1; i >= 0; i--){
                                const agent = allLogs[i].agent;
                                if (agent !== "System") {
                                    setActiveAgent(agent);
                                    break;
                                }
                            }
                        }
                        if (data.result) {
                            setResult(data.result);
                            // Set fields from result dict if root-level is empty
                            if (data.result.scores) setScores(data.result.scores);
                            if (data.result.security_report) setSecurityReport(data.result.security_report);
                            if (data.result.market_report) setMarketReport(data.result.market_report);
                            if (data.result.screenshot_b64) setScreenshotB64(data.result.screenshot_b64);
                            // Auto-switch to bugs tab when analysis completes successfully
                            setActiveTab("bugs");
                        }
                        if (data.error) setErrorMsg(data.error);
                        if (data.status === "done" || data.status === "error") es.close();
                    } catch (err) {
                    // Ignore parse errors
                    }
                }
            })["AnalyzePage.useEffect"];
            es.onerror = ({
                "AnalyzePage.useEffect": ()=>{
                    es.close();
                }
            })["AnalyzePage.useEffect"];
            return ({
                "AnalyzePage.useEffect": ()=>es.close()
            })["AnalyzePage.useEffect"];
        }
    }["AnalyzePage.useEffect"], [
        id
    ]);
    const handleApprove = async ()=>{
        setApproving(true);
        setApproveError("");
        try {
            const { pr_url } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["approveAndPush"])(id);
            setPrUrl(pr_url);
        } catch (e) {
            setApproveError(e.message || "Failed to create PR");
        } finally{
            setApproving(false);
        }
    };
    const getAgentIndex = (name)=>{
        return AGENTS.findIndex((a)=>a.name === name);
    };
    const currentAgentIdx = getAgentIndex(activeAgent);
    const tabs = [
        {
            id: "trace",
            label: "⚙️ Live Trace"
        },
        {
            id: "browser",
            label: "🖥️ Browser"
        },
        {
            id: "bugs",
            label: "🐛 Issues"
        },
        {
            id: "diffs",
            label: "📝 Fixes"
        },
        {
            id: "security",
            label: "🔒 Security"
        },
        {
            id: "architecture",
            label: "🏗️ Architecture"
        },
        {
            id: "market",
            label: "📊 Market"
        }
    ];
    const getTabBadge = (tabId)=>{
        if (tabId === "bugs" && result?.bugs && result.bugs.length > 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1.5 bg-slate-800 text-cyan-400 text-[10px] px-2 py-0.5 rounded-full border border-slate-700 font-mono",
                children: result.bugs.length
            }, void 0, false, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this);
        }
        if (tabId === "diffs" && result?.diffs && result.diffs.length > 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1.5 bg-slate-800 text-cyan-400 text-[10px] px-2 py-0.5 rounded-full border border-slate-700 font-mono",
                children: result.diffs.length
            }, void 0, false, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this);
        }
        if (tabId === "security" && securityReport && securityReport.total_findings > 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] px-2 py-0.5 rounded-full font-mono font-bold animate-pulse",
                children: securityReport.total_findings
            }, void 0, false, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this);
        }
        if (tabId === "browser" && screenshotB64) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1.5 flex h-2.5 w-2.5 relative shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-450 opacity-75"
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, this);
        }
        if (tabId === "market" && marketReport) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1.5 flex h-2.5 w-2.5 relative shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-450 opacity-75"
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this);
        }
        return null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#020817] text-slate-100 flex flex-col font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-slate-800/60 bg-slate-900/35 backdrop-blur-md sticky top-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push("/"),
                                    className: "text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800/40 rounded-xl",
                                    children: "← Back"
                                }, void 0, false, {
                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-display font-bold text-lg text-white tracking-wide",
                                            children: "🤖 Autonomous Architect Pipeline"
                                        }, void 0, false, {
                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 font-mono text-xs truncate max-w-[280px] sm:max-w-md mt-0.5",
                                            children: result?.repo_url || `Job ID: ${id}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/analyze/[id]/page.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                scores && scores.health !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 shadow-sm text-xs font-mono font-bold ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScoreColorClass"])(scores.health)}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-display font-semibold uppercase tracking-wider text-slate-400",
                                            children: "Health:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                scores.health,
                                                "/100"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    status: status
                                }, void 0, false, {
                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/analyze/[id]/page.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/analyze/[id]/page.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 max-w-7xl w-full mx-auto p-6 space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoresDashboard, {
                        scores: scores
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AgentRow, {
                        logs: logs,
                        status: status,
                        activeAgentName: activeAgent
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass border border-slate-800/40 rounded-2xl p-6 shadow-xl relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-3 left-4 flex items-center gap-2 font-mono text-[9px] text-slate-500 uppercase tracking-widest",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this),
                                    "Live Agent Sync Node"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-24 w-full mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-full h-full",
                                    viewBox: "0 0 800 80",
                                    preserveAspectRatio: "xMidYMid meet",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "80",
                                            y1: "35",
                                            x2: "720",
                                            y2: "35",
                                            stroke: "#1e293b",
                                            strokeWidth: "2",
                                            strokeDasharray: "4,4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        currentAgentIdx >= 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "80",
                                            y1: "35",
                                            x2: 80 + currentAgentIdx * 160,
                                            y2: "35",
                                            stroke: AGENTS[currentAgentIdx].hex,
                                            strokeWidth: "3.5",
                                            strokeLinecap: "round",
                                            className: "transition-all duration-700"
                                        }, void 0, false, {
                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this),
                                        AGENTS.map((agent, idx)=>{
                                            const cx = 80 + idx * 160;
                                            const cy = 35;
                                            const isRunning = activeAgent === agent.name && status === "running";
                                            const isCompleted = getAgentIndex(activeAgent) > idx || status === "done";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                children: [
                                                    isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: cx,
                                                        cy: cy,
                                                        r: "20",
                                                        fill: "none",
                                                        stroke: agent.hex,
                                                        strokeWidth: "1.5",
                                                        className: "animate-ping"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: cx,
                                                        cy: cy,
                                                        r: "12",
                                                        fill: isRunning ? agent.hex : isCompleted ? "#10B981" : "#0f172a",
                                                        stroke: isRunning ? "#fff" : isCompleted ? "#047857" : "rgba(255,255,255,0.08)",
                                                        strokeWidth: "2",
                                                        className: "transition-all duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: cx,
                                                        y: cy + 4,
                                                        textAnchor: "middle",
                                                        className: "text-xs pointer-events-none select-none",
                                                        children: agent.emoji
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: cx,
                                                        y: cy + 25,
                                                        textAnchor: "middle",
                                                        fill: isRunning ? "#f8fafc" : isCompleted ? "#10B981" : "#64748b",
                                                        className: "text-[9px] font-display font-bold uppercase tracking-wider transition-colors duration-500",
                                                        children: agent.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display font-bold text-xs uppercase tracking-widest text-slate-400",
                                        children: "Agent Registry"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this),
                                    AGENTS.map((agent)=>{
                                        const agentLogs = logs.filter((l)=>l.agent === agent.name);
                                        const lastLog = agentLogs.length > 0 ? agentLogs[agentLogs.length - 1] : undefined;
                                        const isCurrent = activeAgent === agent.name && status === "running";
                                        const isFinished = getAgentIndex(activeAgent) > getAgentIndex(agent.name) || status === "done";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AgentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            name: agent.name,
                                            emoji: agent.emoji,
                                            description: agent.name === "Scanner" ? "Scans repository layout & languages" : agent.name === "Explorer" ? "Drives browser session with Playwright" : agent.name === "Auditor" ? "Analyzes runtime crash logs" : agent.name === "Architect" ? "Checks codebase structure quality" : "Generates file edits and commits fixes",
                                            active: isCurrent,
                                            done: isFinished,
                                            lastMessage: lastLog?.message
                                        }, agent.name, false, {
                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1 border-b border-slate-800/80",
                                        children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveTab(tab.id),
                                                className: `px-4 py-3 text-xs font-display font-bold uppercase tracking-wider transition-colors border-b-2 -mb-px flex items-center ${activeTab === tab.id ? "border-cyan-500 text-cyan-400" : "border-transparent text-slate-400 hover:text-slate-200"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: tab.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 19
                                                    }, this),
                                                    getTabBadge(tab.id)
                                                ]
                                            }, tab.id, true, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 365,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this),
                                    activeTab === "trace" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass border border-slate-800/50 rounded-2xl p-5 shadow-inner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4 border-b border-slate-800 pb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs font-mono text-slate-500 uppercase tracking-wider",
                                                        children: "Console Trace Output"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 383,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-[380px] overflow-y-auto font-mono text-xs leading-relaxed space-y-2 pr-2",
                                                children: [
                                                    logs.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-650 italic text-center py-12",
                                                        children: "Pipeline initialization in progress..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 21
                                                    }, this),
                                                    logs.map((log, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2 items-start py-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-600 select-none text-[10px] w-6 text-right shrink-0",
                                                                    children: idx + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0 bg-slate-900 border border-slate-800 text-slate-405`,
                                                                    children: log.agent
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `${LOG_LEVEL_COLORS[log.level] || "text-slate-300"} break-all`,
                                                                    children: log.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 389,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 382,
                                        columnNumber: 15
                                    }, this),
                                    activeTab === "browser" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrowserPreview, {
                                        screenshotB64: screenshotB64
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 414,
                                        columnNumber: 15
                                    }, this),
                                    activeTab === "bugs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            !result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass border border-slate-800/40 rounded-2xl py-16 text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-550 text-sm font-mono animate-pulse",
                                                    children: status === "running" ? "Agents are scanning for runtime bugs..." : "No bugs analyzed."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 421,
                                                columnNumber: 19
                                            }, this),
                                            result?.bugs?.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass border border-slate-800/40 rounded-2xl py-16 text-center space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-5xl",
                                                        children: "✨"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-display font-bold text-slate-200 text-lg",
                                                        children: "Codebase Clean!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-500 text-xs max-w-sm mx-auto",
                                                        children: "Explorer navigated all endpoints successfully without encountering uncaught client crashes."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 428,
                                                columnNumber: 19
                                            }, this),
                                            result && result.bugs && result.bugs.map((bug, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnhancedIssueCard, {
                                                    issue: bug
                                                }, idx, false, {
                                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 419,
                                        columnNumber: 15
                                    }, this),
                                    activeTab === "diffs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            !result?.diffs?.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass border border-slate-800/40 rounded-2xl py-16 text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-500 text-sm font-mono",
                                                    children: status === "running" ? "Generating code edits with Gemini..." : "No diffs generated."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 446,
                                                columnNumber: 19
                                            }, this),
                                            isMounted && result?.diffs?.map((diff, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiffCollapse, {
                                                    diff: diff
                                                }, idx, false, {
                                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 19
                                                }, this)),
                                            result?.diffs && result.diffs.length > 0 && !prUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass border border-slate-700/50 rounded-2xl p-6 shadow-xl space-y-4 mt-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-display font-bold text-slate-200 text-base",
                                                                children: "Awaiting Human Gate Approval"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                                lineNumber: 461,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-500 text-xs leading-relaxed mt-1",
                                                                children: "Review the code diffs above. Upon approval, RepoGuardian will create a new git branch, apply the changes, and create a Pull Request on your repository."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 21
                                                    }, this),
                                                    approveError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-rose-450 font-mono text-xs",
                                                        children: approveError
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleApprove,
                                                        disabled: approving,
                                                        className: "relative group w-full sm:w-auto active:scale-95 transition-transform",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl opacity-45 group-hover:opacity-75 blur-[3px]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                                lineNumber: 478,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2",
                                                                children: approving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "animate-spin w-4 h-4 text-slate-950",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                    className: "opacity-25",
                                                                                    cx: "12",
                                                                                    cy: "12",
                                                                                    r: "10",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                                                                    lineNumber: 483,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    className: "opacity-75",
                                                                                    fill: "currentColor",
                                                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                                                                    lineNumber: 484,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                                                            lineNumber: 482,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Creating Pull Request..."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                                                            lineNumber: 486,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                                                    lineNumber: 481,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Approve & Push PR to GitHub"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                                                            lineNumber: 490,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "✓"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                                                            lineNumber: 491,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                                lineNumber: 479,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 459,
                                                columnNumber: 19
                                            }, this),
                                            prUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass border border-emerald-500/40 bg-emerald-500/5 rounded-2xl p-6 shadow-xl space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-display font-bold text-emerald-400 text-lg flex items-center gap-2",
                                                        children: "🎉 PR Created Successfully!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-300 text-sm",
                                                        children: "The branch has been pushed and a PR is open:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 505,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: prUrl,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "text-cyan-400 underline font-mono text-xs break-all hover:text-cyan-300 block",
                                                        children: prUrl
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 501,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 444,
                                        columnNumber: 15
                                    }, this),
                                    activeTab === "security" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SecurityPanel, {
                                        report: securityReport
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 523,
                                        columnNumber: 15
                                    }, this),
                                    activeTab === "architecture" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: !result ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass border border-slate-800/40 rounded-2xl py-16 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 text-sm font-mono animate-pulse",
                                                children: "Running static analysis checks..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 531,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                            lineNumber: 530,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArchitecturePanel, {
                                            result: result
                                        }, void 0, false, {
                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                            lineNumber: 536,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 528,
                                        columnNumber: 15
                                    }, this),
                                    activeTab === "market" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarketPanel, {
                                        report: marketReport
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 543,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this),
                    status === "error" && errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass border border-rose-500/40 bg-rose-500/5 rounded-2xl p-5 shadow-lg space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-display font-bold text-rose-400 text-sm flex items-center gap-2",
                                children: "⚠️ Pipeline Failed"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 552,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-xs font-mono",
                                children: errorMsg
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 555,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-550 text-xs",
                                children: "Check if the repository URL is correct, exists publicly, and contains a buildable stack."
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 556,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 551,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/analyze/[id]/page.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
_s(AnalyzePage, "+p+Whg+SNcTd9/nS1aP0P21sVEA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = AnalyzePage;
// ── Sub-components ──────────────────────────────────────────────────────────
function VerdictBadge({ verdict }) {
    if (!verdict) return null;
    const classes = {
        "Approved": "bg-emerald-500/10 border border-emerald-500/20 text-emerald-450",
        "Approved with Caution": "bg-amber-500/10 border border-amber-500/20 text-amber-450",
        "Needs Review": "bg-blue-500/10 border border-blue-500/20 text-blue-400",
        "Rejected": "bg-rose-500/10 border border-rose-500/20 text-rose-450"
    };
    const label = verdict;
    const emoji = verdict === "Approved" ? "✅" : verdict === "Approved with Caution" ? "⚠️" : verdict === "Needs Review" ? "🔍" : "❌";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider shrink-0 ${classes[verdict] || "bg-slate-800 border-slate-700 text-slate-400"}`,
        children: [
            emoji,
            " ",
            label
        ]
    }, void 0, true, {
        fileName: "[project]/app/analyze/[id]/page.tsx",
        lineNumber: 580,
        columnNumber: 5
    }, this);
}
_c2 = VerdictBadge;
function ScoreRing({ score, label, size = "md" }) {
    const radius = size === "sm" ? 24 : 35;
    const strokeWidth = size === "sm" ? 6 : 8;
    const circumference = 2 * Math.PI * radius;
    const validScore = score !== null && score !== undefined ? score : 0;
    let color = "#64748b"; // grey if null
    if (score !== null && score !== undefined) {
        if (score >= 80) {
            color = "#10b981"; // green
        } else if (score >= 60) {
            color = "#f59e0b"; // amber
        } else {
            color = "#ef4444"; // red
        }
    }
    const offset = circumference - validScore / 100 * circumference;
    const sizeClass = size === "sm" ? "w-16 h-16" : "w-24 h-24";
    const textClass = size === "sm" ? "text-sm" : "text-xl";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative flex items-center justify-center shrink-0 ${sizeClass}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-full h-full transform -rotate-90",
                        viewBox: "0 0 100 100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "50",
                                cy: "50",
                                r: radius,
                                fill: "transparent",
                                stroke: "#1e293b",
                                strokeWidth: strokeWidth
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 611,
                                columnNumber: 11
                            }, this),
                            score !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "50",
                                cy: "50",
                                r: radius,
                                fill: "transparent",
                                stroke: color,
                                strokeWidth: strokeWidth,
                                strokeDasharray: circumference,
                                strokeDashoffset: offset,
                                strokeLinecap: "round",
                                className: "score-ring-path transition-all duration-1000 ease-out"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 620,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 610,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute flex flex-col items-center justify-center text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `font-mono font-black ${textClass} text-white`,
                            children: score !== null && score !== undefined ? score : "—"
                        }, void 0, false, {
                            fileName: "[project]/app/analyze/[id]/page.tsx",
                            lineNumber: 635,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 634,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 609,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-2 max-w-[80px] truncate",
                title: label,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 640,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/analyze/[id]/page.tsx",
        lineNumber: 608,
        columnNumber: 5
    }, this);
}
_c3 = ScoreRing;
function ScoresDashboard({ scores }) {
    if (!scores) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass border border-slate-800/40 rounded-2xl p-6 text-center shadow-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-500 text-xs font-mono animate-pulse",
                children: "Repository health scores will load when Auditor completes scanning..."
            }, void 0, false, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 651,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/analyze/[id]/page.tsx",
            lineNumber: 650,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass border border-slate-700/50 rounded-2xl p-6 shadow-xl space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-display font-bold text-xs uppercase tracking-widest text-slate-450",
                children: "Repository Health Dashboard"
            }, void 0, false, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 660,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-around gap-6 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreRing, {
                        score: scores.health,
                        label: "Health"
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 664,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreRing, {
                        score: scores.code_quality,
                        label: "Code Quality"
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 665,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreRing, {
                        score: scores.maintainability,
                        label: "Maintainability"
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 666,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreRing, {
                        score: scores.documentation,
                        label: "Documentation"
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 667,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreRing, {
                        score: scores.security,
                        label: "Security"
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 668,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 663,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/analyze/[id]/page.tsx",
        lineNumber: 659,
        columnNumber: 5
    }, this);
}
_c4 = ScoresDashboard;
function AgentRow({ logs, status, activeAgentName }) {
    const activeAgentIndex = ALL_SEVEN_AGENTS.findIndex((a)=>a.name === activeAgentName);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass border border-slate-800/40 rounded-xl p-4 shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center gap-4",
            children: ALL_SEVEN_AGENTS.map((agent, idx)=>{
                const isSystem = agent.name === "System";
                let isCompleted = false;
                let isActive = false;
                if (status === "done") {
                    isCompleted = true;
                } else if (status === "error") {
                    isCompleted = idx < activeAgentIndex;
                } else {
                    if (isSystem) {
                        isCompleted = false;
                        isActive = false;
                    } else {
                        isCompleted = idx < activeAgentIndex;
                        isActive = idx === activeAgentIndex;
                    }
                }
                let stateClass = "bg-slate-950/50 text-slate-500 border-slate-900";
                if (isActive) {
                    stateClass = "bg-slate-850 text-white ring-2 ring-cyan-500/50 shadow-lg shadow-cyan-500/10";
                } else if (isCompleted) {
                    stateClass = "bg-emerald-500/5 text-emerald-450 border-emerald-500/20";
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold select-none relative transition-all duration-300 ${stateClass}`,
                    children: [
                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute -top-1 -right-1 flex h-2.5 w-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"
                                }, void 0, false, {
                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                    lineNumber: 713,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"
                                }, void 0, false, {
                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                    lineNumber: 714,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/analyze/[id]/page.tsx",
                            lineNumber: 712,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: agent.emoji
                        }, void 0, false, {
                            fileName: "[project]/app/analyze/[id]/page.tsx",
                            lineNumber: 717,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: agent.name
                        }, void 0, false, {
                            fileName: "[project]/app/analyze/[id]/page.tsx",
                            lineNumber: 718,
                            columnNumber: 15
                        }, this),
                        isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-emerald-500 font-bold ml-1",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/app/analyze/[id]/page.tsx",
                            lineNumber: 720,
                            columnNumber: 17
                        }, this)
                    ]
                }, agent.name, true, {
                    fileName: "[project]/app/analyze/[id]/page.tsx",
                    lineNumber: 707,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/app/analyze/[id]/page.tsx",
            lineNumber: 679,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/analyze/[id]/page.tsx",
        lineNumber: 678,
        columnNumber: 5
    }, this);
}
_c5 = AgentRow;
function BrowserPreview({ screenshotB64 }) {
    if (!screenshotB64) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass border border-slate-800/40 rounded-2xl p-8 text-center min-h-[380px] flex flex-col justify-center items-center shadow-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-lg border border-slate-800 rounded-xl overflow-hidden bg-slate-950/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-900/80 px-4 py-2 border-b border-slate-800 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full bg-slate-700"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 737,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full bg-slate-700"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 738,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full bg-slate-700"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 739,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 736,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-md mx-auto h-5 rounded-md bg-slate-950/50 border border-slate-800"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 741,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 735,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-16 flex flex-col items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl animate-pulse",
                                children: "📷"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 744,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-slate-350",
                                children: "Live browser screenshot captured when Explorer runs"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 745,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 max-w-xs mx-auto",
                                children: "Playwright will launch and visit the server. The home page preview will appear here."
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 746,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 743,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 734,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/analyze/[id]/page.tsx",
            lineNumber: 733,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass border border-slate-800/40 rounded-2xl shadow-xl overflow-hidden bg-slate-950/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full bg-rose-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 760,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full bg-amber-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 761,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full bg-emerald-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 762,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 759,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-md bg-slate-950 px-4 py-1 text-xs text-slate-400 font-mono w-[260px] sm:w-[400px] truncate border border-slate-850",
                                children: "localhost:PORT — Live Playwright Preview"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 764,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 758,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-450 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1.5 animate-pulse select-none shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 769,
                                columnNumber: 11
                            }, this),
                            "LIVE"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 768,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 757,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex justify-center items-center bg-slate-950/45",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: `data:image/png;base64,${screenshotB64}`,
                    alt: "Playwright dynamic crawl screen preview",
                    className: "max-w-full rounded-lg shadow-inner max-h-[500px] object-contain border border-slate-800"
                }, void 0, false, {
                    fileName: "[project]/app/analyze/[id]/page.tsx",
                    lineNumber: 775,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 774,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/analyze/[id]/page.tsx",
        lineNumber: 756,
        columnNumber: 5
    }, this);
}
_c6 = BrowserPreview;
function EnhancedIssueCard({ issue }) {
    _s1();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const severityColors = {
        critical: "bg-rose-500/10 border-rose-500/30 text-rose-400",
        high: "bg-rose-500/10 border-rose-500/20 text-rose-405",
        medium: "bg-amber-500/10 border-amber-500/30 text-amber-400",
        low: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
        info: "bg-slate-500/10 border border-slate-700 text-slate-400"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass border border-slate-850 rounded-xl overflow-hidden shadow-sm transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(!open),
                className: "w-full flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-slate-900/30 hover:bg-slate-900/60 transition-colors gap-3 text-left animate-slide-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs font-bold text-slate-500",
                                children: issue.issue_id
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 802,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[9px] font-bold tracking-wider px-2 py-0.5 rounded border uppercase ${severityColors[issue.severity_level]}`,
                                children: issue.severity_level
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 803,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs text-cyan-400 whitespace-nowrap",
                                children: issue.file_name
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 806,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VerdictBadge, {
                                verdict: issue.review_verdict
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 807,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 801,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between w-full md:flex-1 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-200 text-xs font-semibold tracking-wide",
                                children: issue.issue_title
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 810,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500 text-[10px] shrink-0 font-mono ml-auto",
                                children: open ? "COLLAPSE ▲" : "EXPAND ▼"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 813,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 809,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 797,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 border-t border-slate-900 bg-slate-950/60 space-y-5 animate-slide-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-display font-semibold text-slate-550 uppercase tracking-wider block",
                                        children: "Explanation"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 823,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300 text-xs leading-relaxed",
                                        children: issue.explanation
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 826,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 822,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-display font-semibold text-amber-500 uppercase tracking-wider block",
                                        children: "Estimated Impact"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 831,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-400/90 text-xs leading-relaxed bg-amber-500/5 p-3 rounded-lg border border-amber-500/10",
                                        children: [
                                            "⚠️ ",
                                            issue.estimated_impact
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 834,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 830,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 821,
                        columnNumber: 11
                    }, this),
                    issue.code_snippet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-display font-semibold text-slate-550 uppercase tracking-wider block",
                                children: "Unsafe Code Snippet"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 842,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "bg-rose-950/10 border border-rose-900/20 text-rose-350 p-4 rounded-lg text-xs font-mono overflow-x-auto",
                                children: issue.code_snippet
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 845,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 841,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-display font-semibold text-slate-550 uppercase tracking-wider block",
                                children: "Recommended Fix"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 852,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "bg-emerald-950/10 border border-emerald-900/20 text-emerald-355 p-4 rounded-lg text-xs font-mono overflow-x-auto whitespace-pre-wrap",
                                children: issue.recommended_fix
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 855,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 851,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-violet-500/30 bg-violet-950/5 rounded-xl p-4 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between border-b border-violet-500/20 pb-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: "🤖"
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 864,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-display font-bold text-xs uppercase tracking-wider text-violet-400",
                                                children: "RepoGuardian Reviewer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 865,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 863,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VerdictBadge, {
                                                verdict: issue.review_verdict
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 870,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400 text-xs font-semibold",
                                                children: [
                                                    "Confidence: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white",
                                                        children: [
                                                            issue.confidence_score,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 872,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 871,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400 text-xs font-semibold",
                                                children: [
                                                    "Risk: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-rose-400 uppercase",
                                                        children: issue.risk_level
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 875,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 874,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 869,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 862,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-display font-semibold text-slate-500 uppercase tracking-wider block",
                                                children: "Why Valid"
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 882,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-350 text-xs leading-relaxed",
                                                children: issue.validity_explanation
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 885,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 881,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-display font-semibold text-amber-500 uppercase tracking-wider block",
                                                children: "Side Effects"
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 890,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-amber-400/90 text-xs leading-relaxed",
                                                children: issue.potential_side_effects
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 893,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 889,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-display font-semibold text-slate-500 uppercase tracking-wider block",
                                                children: "Alternatives"
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 898,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-350 text-xs leading-relaxed",
                                                children: issue.alternative_approaches
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 901,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 897,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 880,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 861,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 820,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/analyze/[id]/page.tsx",
        lineNumber: 796,
        columnNumber: 5
    }, this);
}
_s1(EnhancedIssueCard, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c7 = EnhancedIssueCard;
function SecurityPanel({ report }) {
    _s2();
    const [activeCheck, setActiveCheck] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("secrets");
    if (!report) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass border border-slate-800/40 rounded-2xl p-16 text-center shadow-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-500 text-sm font-mono animate-pulse",
                children: "Security scans are compiling. Running 5 layers of checks..."
            }, void 0, false, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 921,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/analyze/[id]/page.tsx",
            lineNumber: 920,
            columnNumber: 7
        }, this);
    }
    const { check_1_secrets, check_2_data_flow, check_3_predeploy, check_4_deep, check_5_attacker, total_findings, critical_total } = report;
    const deployReady = check_3_predeploy.deploy_ready;
    const checks = [
        {
            id: "secrets",
            label: "🔑 Secret Leak",
            data: check_1_secrets,
            count: check_1_secrets.findings?.length || 0
        },
        {
            id: "data_flow",
            label: "👤 Data Flow",
            data: check_2_data_flow,
            count: check_2_data_flow.findings?.length || 0
        },
        {
            id: "predeploy",
            label: "🚀 Pre-Deploy",
            data: check_3_predeploy,
            count: check_3_predeploy.findings?.length || 0
        },
        {
            id: "deep",
            label: "🔬 Deep Logic",
            data: check_4_deep,
            count: check_4_deep.findings?.length || 0
        },
        {
            id: "attacker",
            label: "💀 Attacker View",
            data: check_5_attacker,
            count: check_5_attacker.findings?.length || 0
        }
    ];
    const currentCheck = checks.find((c)=>c.id === activeCheck);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass border border-slate-800/60 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display font-bold text-base text-white tracking-wide",
                                children: "5-Layer Security Audit"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 955,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-450 text-xs mt-0.5",
                                children: "Based on Gitleaks · Bearer · ECC · Trail of Bits methodologies"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 958,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 954,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-bold px-3 py-1 rounded-full",
                                children: [
                                    "🚨 ",
                                    critical_total,
                                    " Critical"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 963,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold px-3 py-1 rounded-full",
                                children: [
                                    "⚠️ ",
                                    total_findings,
                                    " Total"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 966,
                                columnNumber: 11
                            }, this),
                            deployReady ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-450 text-xs font-mono font-bold px-3 py-1 rounded-full",
                                children: "✅ Deploy Ready"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 970,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-rose-500/10 border border-rose-500/20 text-rose-450 text-xs font-mono font-bold px-3 py-1 rounded-full animate-pulse",
                                children: "❌ Not Deploy Ready"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 974,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 962,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 953,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1 border-b border-slate-800/80 pb-px",
                children: checks.map((chk)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveCheck(chk.id),
                        className: `px-4 py-2 text-xs font-semibold tracking-wide transition-all border-b-2 -mb-px flex items-center gap-2 ${activeCheck === chk.id ? "border-cyan-500 text-cyan-400" : "border-transparent text-slate-400 hover:text-slate-200"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: chk.label
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 993,
                                columnNumber: 13
                            }, this),
                            chk.count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-rose-500/15 border border-rose-500/25 text-rose-400 text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold",
                                children: chk.count
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 995,
                                columnNumber: 15
                            }, this)
                        ]
                    }, chk.id, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 984,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 982,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 animate-slide-up",
                children: currentCheck.count === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass border border-slate-850 rounded-xl p-8 text-center space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-3xl text-emerald-450",
                            children: "✨"
                        }, void 0, false, {
                            fileName: "[project]/app/analyze/[id]/page.tsx",
                            lineNumber: 1007,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-display font-bold text-slate-200 text-sm",
                            children: "No issues found in this check"
                        }, void 0, false, {
                            fileName: "[project]/app/analyze/[id]/page.tsx",
                            lineNumber: 1008,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 text-xs max-w-sm mx-auto",
                            children: currentCheck.data.summary || "Security policies satisfied."
                        }, void 0, false, {
                            fileName: "[project]/app/analyze/[id]/page.tsx",
                            lineNumber: 1011,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/analyze/[id]/page.tsx",
                    lineNumber: 1006,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: currentCheck.data.findings.map((f, fidx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SecurityFindingCard, {
                            finding: f
                        }, fidx, false, {
                            fileName: "[project]/app/analyze/[id]/page.tsx",
                            lineNumber: 1018,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/analyze/[id]/page.tsx",
                    lineNumber: 1016,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1004,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/analyze/[id]/page.tsx",
        lineNumber: 951,
        columnNumber: 5
    }, this);
}
_s2(SecurityPanel, "xLWkkRc6Lml+NjsZPsHA91SPky0=");
_c8 = SecurityPanel;
function SecurityFindingCard({ finding }) {
    _s3();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const severityColors = {
        critical: "bg-rose-500/10 border-rose-500/30 text-rose-450",
        high: "bg-rose-500/10 border-rose-500/20 text-rose-400",
        medium: "bg-amber-500/10 border-amber-500/30 text-amber-400",
        low: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
    };
    const scenario = finding.exploit_scenario || finding.attack_scenario || finding.damage_potential;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass border border-slate-850 rounded-xl overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(!open),
                className: "w-full flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-slate-900/30 hover:bg-slate-900/60 transition-colors gap-3 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs font-semibold text-slate-500",
                                children: finding.check_id
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1045,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[9px] font-bold tracking-wider px-2 py-0.5 rounded border uppercase ${severityColors[finding.severity]}`,
                                children: finding.severity
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1046,
                                columnNumber: 11
                            }, this),
                            finding.file_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs text-cyan-400",
                                children: finding.file_name
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1050,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1044,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between w-full md:flex-1 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-200 text-xs font-semibold",
                                children: finding.title
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1054,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500 text-[10px] font-mono shrink-0 ml-auto",
                                children: open ? "COLLAPSE ▲" : "EXPAND ▼"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1057,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1053,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1040,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 border-t border-slate-900 bg-slate-950/60 space-y-4 animate-slide-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-display font-semibold text-slate-500 uppercase tracking-wider block",
                                children: "Description"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1066,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-350 text-xs leading-relaxed",
                                children: finding.description
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1069,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1065,
                        columnNumber: 11
                    }, this),
                    scenario && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-display font-semibold text-rose-400 uppercase tracking-wider block",
                                children: "Exploit Scenario / Damage Potential"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1076,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "bg-rose-950/10 border border-rose-900/20 text-rose-350 p-4 rounded-lg text-xs font-mono overflow-x-auto whitespace-pre-wrap",
                                children: scenario
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1079,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1075,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-display font-semibold text-emerald-450 uppercase tracking-wider block",
                                children: "Remediation / Fix"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1086,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "bg-emerald-950/10 border border-emerald-900/20 text-emerald-355 p-4 rounded-lg text-xs font-mono overflow-x-auto whitespace-pre-wrap",
                                children: finding.fix
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1089,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1085,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1064,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/analyze/[id]/page.tsx",
        lineNumber: 1039,
        columnNumber: 5
    }, this);
}
_s3(SecurityFindingCard, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c9 = SecurityFindingCard;
function MarketPanel({ report }) {
    if (!report) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass border border-slate-800/40 rounded-2xl p-16 text-center shadow-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-500 text-sm font-mono animate-pulse",
                children: "Generating market strategist reports. Conducting competitive landscape analysis..."
            }, void 0, false, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1103,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/analyze/[id]/page.tsx",
            lineNumber: 1102,
            columnNumber: 7
        }, this);
    }
    const { project_summary, one_line_pitch, viability_score, viability_reason, market_exists, market_size, target_audience, competitors, market_gap, unique_differentiators, startup_roadmap, risks, recommended_next_feature, investor_appeal } = report;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass border-glow rounded-2xl p-6 shadow-xl space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-center md:items-start justify-between gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg md:text-xl font-display font-bold text-white tracking-wide",
                                        children: project_summary
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass px-4 py-2.5 rounded-lg border border-cyan-500/20 text-cyan-400 text-xs italic inline-block",
                                        children: [
                                            "“",
                                            one_line_pitch,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1136,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center md:items-end justify-center shrink-0 text-center md:text-right max-w-xs gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreRing, {
                                        score: viability_score,
                                        label: "Viability Rating"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-[10px] leading-relaxed",
                                        children: viability_reason
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 border-t border-slate-800 pt-4 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-display font-semibold text-slate-500 uppercase tracking-wider block",
                                        children: "Market Size"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-white block mt-0.5",
                                        children: market_size
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-display font-semibold text-slate-500 uppercase tracking-wider block",
                                        children: "Paying Market Exists"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1160,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-white block mt-0.5",
                                        children: market_exists ? "Yes, customer demand identified" : "Uncertain / Niche audience"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1163,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-display font-semibold text-slate-500 uppercase tracking-wider block",
                                        children: "Investor Appeal"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-slate-350 block mt-0.5",
                                        children: investor_appeal
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1171,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass border border-slate-800/40 rounded-2xl p-6 shadow-md space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display font-bold text-sm text-white flex items-center gap-2 border-b border-slate-850 pb-2 select-none",
                                children: "🎯 Target Audience"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-slate-850",
                                children: target_audience?.map((ta, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-white block",
                                                        children: ta.segment
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 1189,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-450 text-[11px] block",
                                                        children: ta.pain_point
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 1190,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 1188,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0",
                                                children: ta.size
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 1192,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1187,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass border border-slate-800/40 rounded-2xl p-6 shadow-md space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display font-bold text-sm text-white flex items-center gap-2 border-b border-slate-850 pb-2 select-none",
                                children: "🚀 What Makes You Unique"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-405 text-xs leading-relaxed",
                                children: market_gap
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: unique_differentiators?.map((diff, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-cyan-450 select-none mt-0.5",
                                                children: "✦"
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 1211,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 leading-normal",
                                                children: diff
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 1212,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1210,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1208,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass border border-slate-800/40 rounded-2xl p-6 shadow-md space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display font-bold text-sm text-white flex items-center gap-2 border-b border-slate-850 pb-2 select-none",
                        children: "⚔️ Competitor Analysis"
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                        children: competitors?.map((comp, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/30 border border-slate-850 rounded-xl p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-2 border-b border-slate-855 pb-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-white block",
                                                        children: comp.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 1229,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-slate-450 block",
                                                        children: comp.what_they_do
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 1230,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 1228,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-slate-900 border border-slate-800 text-slate-400 text-[9px] font-mono px-2 py-0.5 rounded-full select-none",
                                                children: comp.pricing || "Free"
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 1232,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1227,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-display font-bold text-rose-450 uppercase tracking-wider block",
                                                        children: "Their Weakness"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 1238,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-[10px] leading-relaxed",
                                                        children: comp.their_weakness
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 1241,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 1237,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-display font-bold text-emerald-450 uppercase tracking-wider block",
                                                        children: "Your Advantage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 1246,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-[10px] leading-relaxed",
                                                        children: comp.your_advantage
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                                        lineNumber: 1249,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 1245,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1236,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1226,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass border border-slate-800/40 rounded-2xl p-6 shadow-md space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display font-bold text-sm text-white flex items-center gap-2 border-b border-slate-850 pb-2 select-none",
                        children: "🗺️ Startup Roadmap"
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative pl-6 border-l border-slate-800 space-y-6 ml-2 py-2",
                        children: startup_roadmap?.map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative space-y-1.5 animate-slide-up",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -left-[31px] top-0.5 flex items-center justify-center w-[10px] h-[10px] rounded-full bg-cyan-400 ring-4 ring-[#020817]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1268,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-slate-900 border border-slate-800 text-cyan-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase",
                                                children: [
                                                    "Phase ",
                                                    step.step,
                                                    ": ",
                                                    step.phase
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 1271,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-500 font-mono text-[10px]",
                                                children: [
                                                    "(",
                                                    step.timeline,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 1274,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1270,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-200 text-xs font-semibold",
                                        children: step.action
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1278,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-cyan-400/90 font-mono",
                                        children: [
                                            "KPI: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-405",
                                                children: step.metric
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 1282,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1281,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1267,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1265,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass border border-slate-800/40 rounded-2xl p-6 shadow-md space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display font-bold text-sm text-white flex items-center gap-2 border-b border-slate-850 pb-2 select-none",
                        children: "⚠️ Key Risks & Mitigations"
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: risks?.map((risk, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950/20 border border-slate-850 rounded-lg p-3 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-rose-450 font-semibold",
                                        children: [
                                            "Risk: ",
                                            risk.risk
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1298,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] text-emerald-450 leading-relaxed",
                                        children: [
                                            "Mitigation: ",
                                            risk.mitigation
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1301,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1297,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1295,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-cyan-950/10 border border-cyan-500/20 rounded-xl p-4 mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 select-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "💡"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1310,
                                        columnNumber: 13
                                    }, this),
                                    " Recommended Next Feature"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1309,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-200 text-xs leading-normal",
                                children: recommended_next_feature
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1312,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1290,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/analyze/[id]/page.tsx",
        lineNumber: 1128,
        columnNumber: 5
    }, this);
}
_c10 = MarketPanel;
// ── Legacy panel components ──────────────────────────────────────────────────
function BugCard({ bug }) {
    _s4();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const severityColors = {
        critical: "bg-rose-500/10 border-rose-500/30 text-rose-400",
        warning: "bg-amber-500/10 border-amber-500/30 text-amber-400",
        info: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass border border-slate-850 rounded-xl overflow-hidden shadow-sm transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(!open),
                className: "w-full flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-900/30 hover:bg-slate-900/60 transition-colors gap-3 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[9px] font-bold tracking-wider px-2 py-0.5 rounded border uppercase ${severityColors[bug.severity]}`,
                                children: bug.severity
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs text-cyan-400 whitespace-nowrap",
                                children: bug.file
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1341,
                                columnNumber: 11
                            }, this),
                            bug.line_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-600 text-[10px] font-mono shrink-0",
                                children: [
                                    ":",
                                    bug.line_number
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1343,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 w-full sm:flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-300 text-xs font-medium flex-1",
                                children: bug.error_description
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500 text-[10px] shrink-0 font-mono ml-auto",
                                children: open ? "COLLAPSE ▲" : "EXPAND ▼"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1350,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1346,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1333,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 border-t border-slate-900 bg-slate-950/60 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-display font-semibold text-slate-500 uppercase tracking-wider mb-1",
                                    children: "Category"
                                }, void 0, false, {
                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                    lineNumber: 1360,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-200 text-xs font-mono bg-slate-900 px-3 py-1 rounded border border-slate-800 inline-block",
                                    children: bug.error_type
                                }, void 0, false, {
                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                    lineNumber: 1363,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/analyze/[id]/page.tsx",
                            lineNumber: 1359,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1358,
                        columnNumber: 11
                    }, this),
                    bug.code_snippet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-display font-semibold text-slate-500 uppercase tracking-wider",
                                children: "Unsafe Snippet"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1371,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "bg-rose-950/10 border border-rose-900/20 text-rose-300 p-3.5 rounded-lg text-xs font-mono overflow-x-auto",
                                children: bug.code_snippet
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1374,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1370,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-display font-semibold text-slate-500 uppercase tracking-wider",
                                children: "Recommended Fix"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1381,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "bg-emerald-950/10 border border-emerald-900/20 text-emerald-300 p-3.5 rounded-lg text-xs font-mono overflow-x-auto whitespace-pre-wrap",
                                children: bug.suggested_fix
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1384,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1380,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1357,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/analyze/[id]/page.tsx",
        lineNumber: 1332,
        columnNumber: 5
    }, this);
}
_s4(BugCard, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c11 = BugCard;
function DiffCollapse({ diff }) {
    _s5();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!diff.success) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass border border-slate-800/40 rounded-xl p-4 bg-slate-950/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-500 text-xs font-mono",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-rose-400 font-bold",
                        children: diff.file
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1401,
                        columnNumber: 11
                    }, this),
                    ": Failed to generate fix details. (",
                    diff.error,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1400,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/analyze/[id]/page.tsx",
            lineNumber: 1399,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass border border-slate-850 rounded-xl overflow-hidden shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(!open),
                className: "w-full flex items-center justify-between p-4 bg-slate-900/30 hover:bg-slate-900/60 transition-colors text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-emerald-400 font-bold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded",
                                children: "PR Fix Available"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1414,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs text-cyan-400 truncate max-w-[200px] sm:max-w-md",
                                children: diff.file
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1417,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-500 text-[10px] font-mono font-semibold",
                        children: open ? "HIDE DIFF ▲" : "SHOW DIFF ▼"
                    }, void 0, false, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1421,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1409,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-900/80 bg-slate-950 font-mono overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactDiffViewer, {
                    oldValue: diff.original,
                    newValue: diff.fixed,
                    splitView: true,
                    useDarkTheme: true,
                    leftTitle: "Original Source",
                    rightTitle: "Proposed Fix"
                }, void 0, false, {
                    fileName: "[project]/app/analyze/[id]/page.tsx",
                    lineNumber: 1428,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1427,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/analyze/[id]/page.tsx",
        lineNumber: 1408,
        columnNumber: 5
    }, this);
}
_s5(DiffCollapse, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c12 = DiffCollapse;
function ArchitecturePanel({ result }) {
    const { static_issues, ai_analysis, summary } = result.architecture;
    const score = result.architecture.score !== undefined ? result.architecture.score : 100;
    const severityGlows = {
        critical: "bg-rose-500/10 border-rose-500/20 text-rose-405",
        warning: "bg-amber-500/10 border-amber-500/20 text-amber-450",
        info: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
    };
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - score / 100 * circumference;
    const scoreColor = score >= 80 ? "text-emerald-450" : score >= 50 ? "text-amber-450" : "text-rose-450";
    const strokeColor = score >= 80 ? "#10b981" : score >= 50 ? "#f59e0b" : "#f43f5e";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass border border-slate-800/60 bg-slate-950/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center justify-center shrink-0 w-24 h-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-full h-full transform -rotate-90",
                                viewBox: "0 0 100 100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "50",
                                        cy: "50",
                                        r: radius,
                                        fill: "transparent",
                                        stroke: "#1e293b",
                                        strokeWidth: "8"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1463,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "50",
                                        cy: "50",
                                        r: radius,
                                        fill: "transparent",
                                        stroke: strokeColor,
                                        strokeWidth: "8",
                                        strokeDasharray: circumference,
                                        strokeDashoffset: strokeDashoffset,
                                        strokeLinecap: "round",
                                        className: "transition-all duration-1000 ease-out score-ring-path"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1471,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute flex flex-col items-center justify-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xl font-mono font-black ${scoreColor}`,
                                        children: score
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1485,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] text-slate-500 font-bold uppercase tracking-wider",
                                        children: "Score"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1488,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1484,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-center sm:text-left space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display font-bold text-base text-white tracking-wide",
                                children: "Architecture Health Score"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1492,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-xs leading-relaxed max-w-xl",
                                children: [
                                    score >= 80 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-450 font-bold",
                                        children: "Excellent Health: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1497,
                                        columnNumber: 15
                                    }, this) : score >= 50 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-amber-450 font-bold",
                                        children: "Needs Improvement: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1499,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-rose-455 font-bold",
                                        children: "Critical Vulnerabilities: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1501,
                                        columnNumber: 15
                                    }, this),
                                    "This metric summarizes repository structure, security variables hygiene, and performance patterns identified in your static project files."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1495,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center sm:justify-start gap-2 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${severityGlows.critical}`,
                                        children: [
                                            "🚨 ",
                                            summary.critical,
                                            " Critical"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1506,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${severityGlows.warning}`,
                                        children: [
                                            "⚠️ ",
                                            summary.warnings,
                                            " Warnings"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1509,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${severityGlows.info}`,
                                        children: [
                                            "ℹ️ ",
                                            summary.info,
                                            " Notes"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1512,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1505,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1491,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1460,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-display font-bold text-xs uppercase tracking-widest text-slate-400 mb-2",
                                children: [
                                    "Static Lint Issues (",
                                    static_issues.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1521,
                                columnNumber: 11
                            }, this),
                            static_issues.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 text-xs italic",
                                children: "No critical configuration risks or security variables detected in standard files."
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1525,
                                columnNumber: 13
                            }, this) : static_issues.map((issue, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-4 rounded-xl border ${issue.severity === "critical" ? "bg-rose-950/10 border-rose-900/30" : "bg-slate-900/40 border-slate-800/80"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs font-bold ${issue.severity === "critical" ? "text-rose-405" : "text-amber-405"}`,
                                                    children: issue.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                                    lineNumber: 1535,
                                                    columnNumber: 19
                                                }, this),
                                                issue.file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[9px] text-cyan-400 px-2 py-0.5 bg-slate-950 rounded border border-slate-800",
                                                    children: [
                                                        issue.file,
                                                        issue.line ? `:${issue.line}` : ""
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                                    lineNumber: 1539,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                            lineNumber: 1534,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-xs leading-relaxed mb-2",
                                            children: issue.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                            lineNumber: 1544,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-slate-205 text-xs font-medium bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/60",
                                            children: [
                                                "💡 ",
                                                issue.suggestion
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/analyze/[id]/page.tsx",
                                            lineNumber: 1547,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/analyze/[id]/page.tsx",
                                    lineNumber: 1528,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1520,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-display font-bold text-xs uppercase tracking-widest text-slate-400 mb-2",
                                children: "AI Architectural Report"
                            }, void 0, false, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1556,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass border border-slate-800/60 rounded-xl p-5 shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-purple-400 font-display font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5 select-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "🏗️"
                                            }, void 0, false, {
                                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                                lineNumber: 1561,
                                                columnNumber: 15
                                            }, this),
                                            " Gemini 1.5 Flash Architect Review"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1560,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-300 text-xs leading-relaxed whitespace-pre-wrap font-sans space-y-4",
                                        children: ai_analysis
                                    }, void 0, false, {
                                        fileName: "[project]/app/analyze/[id]/page.tsx",
                                        lineNumber: 1563,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analyze/[id]/page.tsx",
                                lineNumber: 1559,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analyze/[id]/page.tsx",
                        lineNumber: 1555,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analyze/[id]/page.tsx",
                lineNumber: 1519,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/analyze/[id]/page.tsx",
        lineNumber: 1459,
        columnNumber: 5
    }, this);
}
_c13 = ArchitecturePanel;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "ReactDiffViewer");
__turbopack_context__.k.register(_c1, "AnalyzePage");
__turbopack_context__.k.register(_c2, "VerdictBadge");
__turbopack_context__.k.register(_c3, "ScoreRing");
__turbopack_context__.k.register(_c4, "ScoresDashboard");
__turbopack_context__.k.register(_c5, "AgentRow");
__turbopack_context__.k.register(_c6, "BrowserPreview");
__turbopack_context__.k.register(_c7, "EnhancedIssueCard");
__turbopack_context__.k.register(_c8, "SecurityPanel");
__turbopack_context__.k.register(_c9, "SecurityFindingCard");
__turbopack_context__.k.register(_c10, "MarketPanel");
__turbopack_context__.k.register(_c11, "BugCard");
__turbopack_context__.k.register(_c12, "DiffCollapse");
__turbopack_context__.k.register(_c13, "ArchitecturePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AgentCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AgentCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const AGENT_COLORS = {
    Scanner: {
        border: "border-cyan-500/30 group-hover:border-cyan-500/50",
        bg: "bg-cyan-500/5",
        text: "text-cyan-400",
        glow: "shadow-[0_0_15px_rgba(6,182,212,0.15)]"
    },
    Explorer: {
        border: "border-emerald-500/30 group-hover:border-emerald-500/50",
        bg: "bg-emerald-500/5",
        text: "text-emerald-400",
        glow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]"
    },
    Auditor: {
        border: "border-amber-500/30 group-hover:border-amber-500/50",
        bg: "bg-amber-500/5",
        text: "text-amber-400",
        glow: "shadow-[0_0_15px_rgba(245,158,11,0.15)]"
    },
    Architect: {
        border: "border-violet-500/30 group-hover:border-violet-500/50",
        bg: "bg-violet-500/5",
        text: "text-violet-400",
        glow: "shadow-[0_0_15px_rgba(124,58,237,0.15)]"
    },
    Executor: {
        border: "border-rose-500/30 group-hover:border-rose-500/50",
        bg: "bg-rose-500/5",
        text: "text-rose-400",
        glow: "shadow-[0_0_15px_rgba(244,63,94,0.15)]"
    },
    System: {
        border: "border-slate-500/30 group-hover:border-slate-500/50",
        bg: "bg-slate-500/5",
        text: "text-slate-400",
        glow: "shadow-[0_0_15px_rgba(100,116,139,0.15)]"
    }
};
function AgentCard({ name, emoji, description, active = false, done = false, lastMessage }) {
    const c = AGENT_COLORS[name] || AGENT_COLORS.System;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "perspective-3d group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `preserve-3d card-3d-rotate glass-panel border rounded-2xl p-5 transition-all duration-300 min-h-[140px] flex flex-col justify-between ${active ? `border-${name === "Scanner" ? "cyan" : name === "Explorer" ? "emerald" : name === "Auditor" ? "amber" : name === "Architect" ? "violet" : "rose"}-500/60 ${c.bg} ${c.glow}` : done ? "border-emerald-500/40 bg-emerald-950/10 shadow-[0_0_10px_rgba(16,185,129,0.05)]" : "border-slate-800 bg-slate-950/40"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]",
                                        children: emoji
                                    }, void 0, false, {
                                        fileName: "[project]/components/AgentCard.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `font-display font-bold text-base tracking-wide ${active ? c.text : done ? "text-emerald-400" : "text-slate-300"}`,
                                                children: name
                                            }, void 0, false, {
                                                fileName: "[project]/components/AgentCard.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 text-xs mt-0.5 font-medium leading-relaxed",
                                                children: description
                                            }, void 0, false, {
                                                fileName: "[project]/components/AgentCard.tsx",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AgentCard.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AgentCard.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `flex items-center gap-1.5 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full border border-current ${c.text} animate-pulse`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-current"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AgentCard.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this),
                                    "ACTIVE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AgentCard.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this),
                            done && !active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-emerald-400 text-sm font-bold animate-fade-in",
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/components/AgentCard.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AgentCard.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/AgentCard.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                lastMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 bg-slate-950/80 border border-slate-800/60 rounded-lg p-2 font-mono text-[10px] text-slate-400 truncate max-w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-slate-600 mr-1",
                            children: "$"
                        }, void 0, false, {
                            fileName: "[project]/components/AgentCard.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this),
                        " ",
                        lastMessage
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AgentCard.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4"
                }, void 0, false, {
                    fileName: "[project]/components/AgentCard.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AgentCard.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AgentCard.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c = AgentCard;
var _c;
__turbopack_context__.k.register(_c, "AgentCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/StatusBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const CONFIG = {
    running: {
        dot: "bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.5)]",
        text: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        label: "Running..."
    },
    done: {
        dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]",
        text: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        label: "Complete"
    },
    error: {
        dot: "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.5)]",
        text: "text-rose-400",
        bg: "bg-rose-500/10",
        border: "border-rose-500/30",
        label: "Failed"
    },
    pending: {
        dot: "bg-slate-500",
        text: "text-slate-400",
        bg: "bg-slate-500/10",
        border: "border-slate-500/30",
        label: "Pending"
    }
};
function StatusBadge({ status, className = "" }) {
    const c = CONFIG[status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider backdrop-blur-md
        ${c.bg} ${c.border} ${c.text} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `w-2 h-2 rounded-full shrink-0 ${c.dot}`
            }, void 0, false, {
                fileName: "[project]/components/StatusBadge.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            c.label
        ]
    }, void 0, true, {
        fileName: "[project]/components/StatusBadge.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = StatusBadge;
var _c;
__turbopack_context__.k.register(_c, "StatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "approveAndPush",
    ()=>approveAndPush,
    "createStatusStream",
    ()=>createStatusStream,
    "getScoreColorClass",
    ()=>getScoreColorClass,
    "listJobs",
    ()=>listJobs,
    "pollJobStatus",
    ()=>pollJobStatus,
    "startAnalysis",
    ()=>startAnalysis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
/**
 * Centralized API client.
 * All backend calls go through here so we only change the URL in one place.
 */ const BACKEND = ("TURBOPACK compile-time value", "http://localhost:8000") || "http://localhost:8000";
async function startAnalysis(repoUrl) {
    const res = await fetch(`${BACKEND}/api/analyze`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            repo_url: repoUrl
        })
    });
    if (!res.ok) {
        const err = await res.json().catch(()=>({}));
        throw new Error(err.detail || `Failed to start analysis: ${res.status}`);
    }
    return res.json();
}
function createStatusStream(jobId) {
    return new EventSource(`${BACKEND}/api/status/${jobId}`);
}
async function approveAndPush(jobId) {
    const res = await fetch(`${BACKEND}/api/approve/${jobId}`, {
        method: "POST"
    });
    if (!res.ok) {
        const err = await res.json().catch(()=>({}));
        throw new Error(err.detail || `Approval failed: ${res.status}`);
    }
    return res.json();
}
async function pollJobStatus(jobId) {
    const res = await fetch(`${BACKEND}/api/job/${jobId}`);
    if (!res.ok) throw new Error(`Poll failed: ${res.status}`);
    return res.json();
}
;
async function listJobs(limit = 10) {
    try {
        // If Supabase url is placeholder, bypass fetching to avoid console network errors
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"] || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].supabaseUrl?.includes("placeholder")) {
            return [];
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("analysis_jobs").select("*").order("created_at", {
            ascending: false
        }).limit(limit);
        if (error) {
            console.error("Failed to list jobs:", error);
            return [];
        }
        return data || [];
    } catch (err) {
        console.error("Error listing jobs:", err);
        return [];
    }
}
function getScoreColorClass(score) {
    if (score === null || score === undefined) return "text-slate-400 border-slate-750 bg-slate-900/40";
    if (score >= 80) return "text-emerald-450 border-emerald-500/20 bg-emerald-500/5";
    if (score >= 60) return "text-amber-450 border-amber-500/20 bg-amber-500/5";
    return "text-rose-450 border-rose-500/20 bg-rose-500/5";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Supabase client placeholder
__turbopack_context__.s([
    "getAccessToken",
    ()=>getAccessToken,
    "getClient",
    ()=>getClient,
    "getSession",
    ()=>getSession,
    "getUser",
    ()=>getUser,
    "signOut",
    ()=>signOut,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
function getClient() {
    return null;
}
;
const supabaseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
async function getSession() {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
}
async function getUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}
async function signOut() {
    await supabase.auth.signOut();
}
async function getAccessToken() {
    const session = await getSession();
    return session?.access_token ?? null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_137ykoj._.js.map