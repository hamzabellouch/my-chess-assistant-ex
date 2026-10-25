# Privacy Policy - My Chess Assistant

Last Updated: October 25, 2026


### 0. Rule 0: Disclaimer on Modified Builds, External Packages & Unofficial Forks:

- **Original Source Integrity:** This privacy policy, safety guarantees, and security features apply strictly and exclusively to the official, unmodified extension binaries and source code distributed directly through this official repository ([hamzabellouch/my-chess-assistant-ex](https://github.com/hamzabellouch/my-chess-assistant-ex)) and its verified official releases.
- **Zero Liability for Modified / External Builds:** We (the publisher and maintainer) assume **no responsibility or liability whatsoever** for any modified extensions, third-party forks, repackaged `.crx` / `.xpi` / `.zip` archives, unofficial distribution channels, or altered projects not originating directly from this official repository. Any installation or use of modified, tampered, or third-party builds is entirely at your own risk, and the publisher assumes no responsibility for any consequences, damages, security compromises, or data breaches that may occur.


### 1. Executive Summary & Overview:

My Chess Assistant is a lightweight browser extension designed to allow users to analyze positions, view Stockfish engine evaluations, and see candidate move arrows while playing against computer bots on Chess.com (`/play/computer`)—featuring embedded WebAssembly NNUE, dynamic SVG board overlays, a floating draggable HUD panel, and client-side multi-line analysis.

#### Core Privacy Commitment:
My Chess Assistant operates **100% locally on your device**. We do **not** collect, store, transmit, share, or sell any personal data, chess moves, board positions, browsing history, device identifiers, or URLs to external servers, analytics providers, or third parties.


### 2. Information Processed On-Device:

To deliver its core chess analysis and evaluation functionality, My Chess Assistant processes operations **strictly locally within your browser**:

- **On-Page Position Scanning:** The extension inspects chessboard DOM elements and move lists strictly on `https://www.chess.com/play/computer*` to construct standard FEN position representations.
- **In-Memory WebAssembly Analysis:** Position evaluation is executed entirely within local browser memory using the Stockfish 16 engine compiled to WebAssembly (WASM).
- **Zero Cloud Processing & Immediate Engine Reset:** All engine calculations take place inside local browser RAM via Web Workers. Positions and search trees are managed purely in memory without communicating with any remote servers.
- **Local Settings Preference Storage:** Only your UI preferences (`mcaCount`: number of lines 1-5, and `mcaPos`: floating panel coordinates) are persisted locally via `chrome.storage.local`. Board positions, game notations, and engine evaluations are never saved to permanent storage or disk.
- **No Browsing Tracking:** The extension never monitors, records, logs, or analyzes your general browsing activity, credentials, or web pages outside the specified URL.


### 3. Permissions Used & Their Purposes:

My Chess Assistant adheres to the principle of least privilege and requests only the minimal permissions required for operation:

**A. Storage (`storage`)**
- **Purpose:** Saves your preferred number of analysis lines (1 to 5) and the floating panel screen coordinates locally on your device so your preferences are preserved across sessions.

**B. Offscreen (`offscreen`) [Chromium-based Browsers]**
- **Purpose:** In Chromium Manifest V3, service workers cannot execute WebAssembly workers directly; the offscreen API is used strictly to host a local Web Worker running the Stockfish engine.

**C. Browser Specific Settings (Firefox Gecko ID: `my-chess-assistant@tkno`)**
- **Purpose:** Required by Mozilla Firefox for extension identification and Manifest V3 compatibility (Firefox 109+).


### 4. Safety & Content Handling Policy:

My Chess Assistant complies strictly with modern browser security standards:

- **Strict Local Isolation:** The extension executes exclusively within the local browser runtime. No remote scripts (`eval`, remote script injection, or external CDN dependencies) are ever loaded or executed.
- **Fair Play & URL Restriction:** Scoped strictly to `https://www.chess.com/play/computer*` to prevent any execution or interference with rated multiplayer games against human players.
- **Zero Data Exfiltration:** The extension possesses no background API endpoints, telemetry servers, or outbound network channels.


### 5. Data Sharing, Analytics & Advertising:

- **No Data Sharing:** Zero user data, board positions, or move calculations leave your browser.
- **No Third-Party Analytics / Telemetry:** My Chess Assistant contains no tracking SDKs, Google Analytics, telemetry beacons, or behavioral monitoring tools.
- **No Advertisements:** My Chess Assistant does not inject, display, or monetize advertisements of any kind.


### 6. Data Retention & Lifecycle:

- **Zero Data Retention:** Because My Chess Assistant does not collect or log personal data, games, or positions, there is no user data retained on any external server or database.
- **Immediate In-Memory Cleanup:** Engine search trees and SVG line overlays are immediately reset upon game restarts or navigation changes.
- **Complete Removal:** Uninstalling or disabling My Chess Assistant instantly ceases all script execution and removes all extension files and local preference storage.


### 7. Managing Permissions & User Rights:

You maintain full control over My Chess Assistant. You may disable or remove the extension at any time via your browser settings:

- **Chromium Browsers (Chrome, Edge, Brave, Opera, Vivaldi):** Navigate to `chrome://extensions/` (or `edge://extensions/`), locate **My Chess Assistant**, and toggle it off or click **Remove**.
- **Mozilla Firefox:** Navigate to `about:addons` > **Extensions**, locate **My Chess Assistant**, and choose **Disable** or **Remove**.


### 8. Contact & Support:

If you have any questions, suggestions, or concerns regarding this Privacy Policy or the security of My Chess Assistant, please contact:  
**Email:** hamzabellouchcontact@gmail.com  
**GitHub:** [https://github.com/hamzabellouch/my-chess-assistant-ex](https://github.com/hamzabellouch/my-chess-assistant-ex)


-------------------------------------------



# سياسة الخصوصية - My Chess Assistant

آخر تحديث: ٢٥ أكتوبر ٢٠٢٦


### ٠. القاعدة رقم ٠: إخلاء المسؤولية عن الإضافات المعدلة والحزم الخارجية والمشاريع المشتقة:

* **سلامة المصدر الأصلي:** تنطبق سياسة الخصوصية، وضمانات الأمان، والميزات المذكورة في هذه الوثيقة حصرياً وصراحةً على الإصدارات الرسمية غير المعدلة من الإضافة والشفرة المصدرية المنشورة مباشرة عبر هذا المستودع الأصلي المعتمد ([hamzabellouch/my-chess-assistant-ex](https://github.com/hamzabellouch/my-chess-assistant-ex)) وصفحة إصداراته الرسمية فقط.
* **عدم تحمل المسؤولية عن النسخ المعدلة أو الخارجية:** نحن (الناشر والمطور) **لا نتحمل أي مسؤولية قانونية أو أمنية أو تقنية** عن تثبيت أو استخدام أي إضافات معدلة، أو حزم خارجية (`.crx` / `.xpi` / `.zip`)، أو نسخ مُعاد تجميعها، أو مشاريع مشتقة ومعدلة لا تنتمي لهذا المستودع الأصلي. كل ما ينتج عن استخدام أو تثبيت نسخ خارجية أو معدلة (من فقدان بيانات، أو ثغرات أمنية، أو برمجيات خبيثة، أو أي أضرار ناجمة) يقع بالكامل على عاتق المستخدم وحده دون أدنى مسؤولية على الناشر.


### ١. الملخص التنفيذي والنظرة العامة:

إضافة My Chess Assistant هي إضافة متصفح خفيفة وسريعة، صُممت لتمكين مستخدمي موقع Chess.com من تحليل المواقف ورؤية تقييمات محرك Stockfish وأسهم أفضل النقلات المقترحة أثناء اللعب ضد الكمبيوتر والروبوتات (`/play/computer`)—مع محرك Stockfish 16 المدمج عبر WebAssembly (NNUE)، ورسم أسهم SVG ديناميكية فوق الرقعة، ولوحة معلومات عائمة وقابلة للسحب، وتحليل متعدد الخطوط (MultiPV).

#### الالتزام الأساسي بالخصوصية:
تعمل إضافة My Chess Assistant **بنسبة ١٠٠٪ محلياً داخل متصفحك**. نحن **لا نجمع**، ولا نخزن، ولا ننقل، ولا نشارك، ولا نبيع أي بيانات شخصية، أو مواقف شطرنج، أو نقلات، أو سجل التصفح، أو معرفات الأجهزة، أو عناوين المواقع (URLs) إلى أي خوادم تحليلات خارجية أو أطراف ثالثة.


### ٢. المعلومات والعمليات التي تتم معالجتها محلياً:

لأداء وظيفتها الأساسية المتمثلة في تحليل رقعة الشطرنج وحساب أفضل النقلات، تقوم إضافة My Chess Assistant بالعمليات التالية **محلياً وحصرياً داخل متصفحك**:

* **قراءة الرقعة على الصفحة:** تقوم الإضافة بفحص عناصر الرقعة وقائمة النقلات حصرياً على صفحة `https://www.chess.com/play/computer*` لتوليد ترميز الموقف القياسي (FEN).
* **التحليل عبر WebAssembly داخل الذاكرة:** يتم تشغيل محرك Stockfish 16 المترجم إلى WebAssembly داخل الذاكرة العشوائية (RAM) للمتصفح عبر Web Worker محلي.
* **انعدام المعالجة السحابية والتفريغ الفوري:** تجري كافة عمليات المحرك وحساب خطوط الشطرنج داخل الذاكرة المؤقتة للجهاز دون أي اتصال بخوادم خارجية.
* **تخزين محلي لتفضيلات الواجهة فقط:** تحتفظ الإضافة فقط باختياراتك لعدد خطوط التحليل (`mcaCount`) وإحداثيات اللوحة العائمة على الشاشة (`mcaPos`) في التخزين المحلي `chrome.storage.local`. لا يتم تخزين مواقف الشطرنج أو النقلات في التخزين الدائم.
* **عدم تتبع نشاط التصفح:** الإضافة لا ترصد، ولا تسجل، ولا تحلل المواقع التي تزورها أو المحتوى خارج الصفحة المحددة.


### ٣. الأذونات المستخدمة وأغراضها:

تلتزم My Chess Assistant بمبدأ الحد الأدنى من الصلاحيات ولا تطلب إلا الأذونات الضرورية لعملها:

**أ. التخزين المحلي (`storage`)**
* **الغرض:** حفظ اختيارك لعدد خطوط التحليل وموقع اللوحة العائمة محلياً على جهازك لضمان ثبات تفضيلاتك عبر جلسات التصفح.

**ب. المستند غير المرئي (`offscreen`) [لمتصفحات كروميوم]**
* **الغرض:** مطلوب في بيئة Manifest V3 لمتصفحات Chromium لتشغيل محرك WebAssembly Stockfish داخل Web Worker دون التعارض مع قيود Service Worker.

**ج. إعدادات فايرفوكس الخاصة (Gecko ID: `my-chess-assistant@tkno`)**
* **الغرض:** مطلوب من قبل متصفح Mozilla Firefox لتعريف الإضافة وضمان توافقيتها مع مواصفات Manifest V3 (إصدار 109 فما فوق).


### ٤. سياسة الأمان والتعامل مع المحتوى:

تلتزم إضافة My Chess Assistant بالمعايير الصارمة لأمان المتصفحات واللعب النظيف:

* **العزل المحلي التام:** تعمل الإضافة حصرياً داخل بيئة المتصفح المحلية. لا يتم تنزيل أو تنفيذ أي سكربتات أو أكواد برمجية خارجية (`eval` أو روابط CDN خارجية).
* **الالتزام باللعب النظيف وتحديد النطاق:** تم تقييد الإضافة بدقة لتعمل فقط على رابط `https://www.chess.com/play/computer*` منعاً لتشغيلها على المباريات الحية المصنفة ضد اللاعبين البشريين.
* **انعدام تسريب البيانات:** لا تحتوي الإضافة على أي خوادم أو قنوات اتصال خارجية، ولا تقوم بأي طلبات HTTP/HTTPS لخوادم طرف ثالث.


### ٥. مشاركة البيانات والتحليلات والإعلانات:

* **عدم مشاركة البيانات:** لا تغادر أي مواقف لعب أو نقلات أو معلومات تصفح جهازك على الإطلاق.
* **عدم وجود تحليلات أو تتبع من جهات خارجية:** لا تحتوي إضافة My Chess Assistant على أي مكتبات تتبع، أو Google Analytics، أو خدمات Telemetry، أو أدوات تقارير خارجية.
* **خالية تماماً من الإعلانات:** لا تعرض الإضافة أو تحقن أو تروّج لأي نوع من الإعلانات التجارية أو السلوكية.


### ٦. الاحتفاظ بالبيانات ودورة حياتها:

* **عدم الاحتفاظ بالبيانات:** نظراً لأن إضافة My Chess Assistant لا تجمع ولا تسجل أي بيانات شخصية أو سجلات لعب، فإنه لا توجد أي بيانات للمستخدم يتم الاحتفاظ بها على أي خوادم أو مساحات تخزين دائمة.
* **مسح فوري من الذاكرة:** يتم إفراغ أشجار بحث المحرك والأسهم البصرية من الذاكرة المؤقتة (RAM) فور الانتقال أو إعادة ضبط اللعبة.
* **الحذف الكامل:** يؤدي تعطيل أو إلغاء تثبيت إضافة My Chess Assistant إلى إزالة كافة ملفات الإضافة وتفضيلاتها فوراً وبشكل دائم.


### ٧. إدارة الأذونات وحقوق المستخدم:

تحتفظ بالتحكم الكامل في إضافة My Chess Assistant، ويمكنك تعطيلها أو إزالتها في أي وقت من خلال إعدادات المتصفح:

* **متصفحات كروميوم (Chrome، Edge، Brave، Opera، Vivaldi):** توجه إلى `chrome://extensions/` (أو `edge://extensions/`)، ثم ابحث عن **My Chess Assistant** وقم بإيقاف تفعيلها أو الضغط على **إزالة (Remove)**.
* **متصفح موزيلا فايرفوكس (Firefox):** توجه إلى `about:addons` ثم قسم **الملحقات (Extensions)**، وابحث عن **My Chess Assistant** واختر **تعطيل (Disable)** أو **إزالة (Remove)**.


### ٨. التواصل والدعم:

إذا كانت لديك أي أسئلة أو استفسارات أو ملاحظات بخصوص سياسة الخصوصية هذه أو أمان إضافة My Chess Assistant، يُرجى التواصل معنا عبر:  
**البريد الإلكتروني:** hamzabellouchcontact@gmail.com  
**مستودع GitHub:** [https://github.com/hamzabellouch/my-chess-assistant-ex](https://github.com/hamzabellouch/my-chess-assistant-ex)
