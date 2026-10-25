# Privacy Policy - My Chess Assistant

Last Updated: October 25, 2026

### 0. Rule 0: Disclaimer on Modified Builds, External Packages & Unofficial Forks:

- **Original Source Integrity:** This privacy policy, safety guarantees, and security features apply strictly and exclusively to official, unmodified extension binaries and source code distributed directly through the official repository and its verified releases.
- **Zero Liability for Modified / External Builds:** We (the publisher and maintainer) assume **no responsibility or liability whatsoever** for any modified extensions, third-party forks, repackaged archives (`.crx` / `.xpi` / `.zip`), or altered projects. Any installation or use of modified or unofficial builds is entirely at your own risk.

---

### 1. Executive Summary & Overview:

**My Chess Assistant** is a browser extension designed to help chess players analyze positions while playing against computer bots on Chess.com (`/play/computer`). It provides real-time Stockfish engine evaluations, win probability estimates, and dynamic move arrows.

#### Core Privacy Commitment:
My Chess Assistant operates **100% locally on your device**. We do **not** collect, store, transmit, share, or sell any personal data, game records, move histories, browsing habits, device identifiers, or IP addresses to external servers, analytics providers, or third parties.

---

### 2. Information Processed On-Device:

To deliver position analysis and visual move suggestions, My Chess Assistant processes data **strictly locally within your browser**:

- **On-Page Position Reading:** The extension reads the current chess game position strictly on `https://www.chess.com/play/computer*` by inspecting the game move list or piece elements on the board.
- **In-Memory WebAssembly Analysis:** Position evaluation is performed locally via the Stockfish 16 engine compiled to WebAssembly (WASM). Calculation runs entirely inside local browser memory (RAM) through a Web Worker.
- **Local User Preferences Storage:** The extension only saves your chosen UI settings locally via `chrome.storage.local`:
  - `mcaCount`: Number of analysis lines (1 to 5).
  - `mcaPos`: Panel screen coordinates ({ left, top }) to restore panel position across games.
- **Zero Cloud Processing:** Chess positions (FEN strings) and engine evaluation outputs never leave your browser.
- **No Browsing Tracking:** The extension is strictly restricted to `https://www.chess.com/play/computer*` and never monitors or interacts with any other web pages or activities.

---

### 3. Permissions Used & Their Purposes:

My Chess Assistant adheres strictly to the principle of least privilege:

**A. Storage (`storage`)**
- **Purpose:** Saves your custom settings (number of analyzed lines and floating panel position) locally on your device so your preferences persist across sessions.

**B. Offscreen (`offscreen`) [Chromium-only]**
- **Purpose:** Required in Chromium Manifest V3 to execute the Stockfish WebAssembly engine inside a dedicated Web Worker environment without violating background Service Worker restrictions.

**C. Browser Specific Settings (Firefox Gecko ID: `my-chess-assistant@tkno`)**
- **Purpose:** Required by Mozilla Firefox for extension identification and Manifest V3 compatibility.

---

### 4. Safety & Fair Play Policy:

- **Play vs Computer Restriction:** To respect fair play standards and chess platforms' terms of service, the extension is restricted exclusively to `https://www.chess.com/play/computer*`. It cannot run on rated multiplayer games against human players.
- **Strict Local Isolation:** The extension executes exclusively within the local browser environment. No remote scripts (`eval`, remote script injection, or external CDN dependencies) are ever loaded.
- **Zero Data Exfiltration:** The extension has no external API endpoints, telemetry servers, or outbound network requests.

---

### 5. Data Sharing, Analytics & Advertising:

- **No Data Sharing:** Zero user data or game information leaves your browser.
- **No Third-Party Analytics / Telemetry:** Contains no tracking SDKs, analytics beacons, or behavioral monitoring tools.
- **No Advertisements:** My Chess Assistant does not contain, display, or monetize advertisements of any kind.

---

### 6. Data Retention & Lifecycle:

- **Zero Data Retention:** Because no personal data or game histories are collected or transmitted, no user data is stored on any server or database.
- **Local Data Reset:** Uninstalling or removing the extension immediately and permanently removes all stored local preferences (`mcaCount` and `mcaPos`).

---

### 7. Managing Permissions & User Rights:

You maintain complete control over the extension. You may disable or remove it at any time via your browser settings:

- **Chromium Browsers (Chrome, Edge, Brave, Opera, Vivaldi):** Navigate to `chrome://extensions/`, locate **My Chess Assistant**, and toggle it off or click **Remove**.
- **Mozilla Firefox:** Navigate to `about:addons` > **Extensions**, locate **My Chess Assistant**, and choose **Disable** or **Remove**.

---

### 8. Contact & Support:

For any questions, feedback, or concerns regarding this Privacy Policy, please contact:  
**Email:** hamzabellouchcontact@gmail.com

---
---

# سياسة الخصوصية - My Chess Assistant

آخر تحديث: ٢٥ أكتوبر ٢٠٢٦

### ٠. القاعدة رقم ٠: إخلاء المسؤولية عن الإضافات المعدلة والحزم الخارجية:

- **سلامة المصدر الأصلي:** تنطبق سياسة الخصوصية وضمانات الأمان المذكورة في هذه الوثيقة حصرياً على الإصدارات الرسمية غير المعدلة من الإضافة والشفرة المصدرية المنشورة مباشرة عبر المستودع الرسمي.
- **عدم تحمل المسؤولية عن النسخ المعدلة:** نحن (الناشر والمطور) **لا نتحمل أي مسؤولية قانونية أو أمنية أو تقنية** عن تثبيت أو استخدام أي إضافات معدلة أو حزم خارجية غير معتمدة، ويقع استخدامها بالكامل على عاتق المستخدم وحده.

---

### ١. الملخص التنفيذي والنظرة العامة:

إضافة **My Chess Assistant** هي إضافة متصفح خفيفة صُممت لمساعدة لاعبي الشطرنج في تحليل مواقف اللعب أثناء مواجهة أجهزة الحاسوب (الروبوتات) على موقع Chess.com عبر رابط (`/play/computer`). توفر الإضافة تقييماً لحظياً للمواقف عبر محرك Stockfish، ونسبة احتمالية الفوز، وأسهماً بصرية لتوضيح أفضل النقلات المقترحة.

#### الالتزام الأساسي بالخصوصية:
تعمل إضافة My Chess Assistant **بنسبة ١٠٠٪ محلياً داخل جهازك**. نحن **لا نجمع**، ولا نخزن، ولا ننقل، ولا نشارك، ولا نبيع أي بيانات شخصية، أو سجلات لعب، أو نقلات، أو سجل تصفح، أو معرفات أجهزة إلى أي خوادم خارجية أو أطراف ثالثة.

---

### ٢. العمليات والمعلومات التي تتم معالجتها محلياً:

- **قراءة الموقف على الصفحة:** تقرأ الإضافة الموقف الحالي للرقعة حصرياً على صفحة `https://www.chess.com/play/computer*` من خلال فحص قائمة النقلات أو القطع على الرقعة.
- **التحليل عبر WebAssembly داخل الذاكرة:** تجري عمليات تقييم الموقف محلياً بالكامل عبر محرك Stockfish 16 المترجم إلى WebAssembly داخل الذاكرة المؤقتة (RAM) للجهاز عبر Web Worker، دون الاتصال بأي خادم سحابي.
- **تخزين الإعدادات التفضيلية محلياً:** تحفظ الإضافة خياراتك للواجهة محلياً فقط عبر `chrome.storage.local`:
  - `mcaCount`: عدد خطوط التحليل المختارة (من 1 إلى 5).
  - `mcaPos`: إحداثيات مكان اللوحة على الشاشة لتظل في نفس المكان الذي اخترته.
- **انعدام الاتصال الخارجي:** مواقف الشطرنج (FEN) ونتائج المحرك لا تغادر متصفحك إطلاقاً.
- **عدم تتبع التصفح:** الإضافة مقيدة بصفحة اللعب ضد الكمبيوتر فقط ولا تراقب أو تتفاعل مع أي مواقع أو صفحات أخرى.

---

### ٣. الأذونات المستخدمة وأغراضها:

تلتزم الإضافة بمبدأ الحد الأدنى من الصلاحيات:

**أ. التخزين المحلي (`storage`)**
- **الغرض:** حفظ تفضيلات المستخدم (عدد خطوط التحليل وموقع اللوحة العائمة) محلياً على جهازك.

**ب. المستند غير المرئي (`offscreen`) [لمتصفحات Chromium]**
- **الغرض:** مطلوب في متصفحات كروميوم (Manifest V3) لتشغيل محرك Stockfish عبر WebAssembly داخل Web Worker دون التعارض مع قيود الـ Service Worker.

**ج. معرف متصفح فايرفوكس (Gecko ID: `my-chess-assistant@tkno`)**
- **الغرض:** مطلوب من قِبل Mozilla Firefox لتعريف الإضافة وضمان توافقها.

---

### ٤. سياسة اللعب النظيف والأمان:

- **التقييد بصفحة اللعب ضد الكمبيوتر:** التزاماً بمعايير اللعب النظيف وشروط استخدام مواقع الشطرنج، تم تقييد الإضافة لتعمل حصرياً على صفحة `https://www.chess.com/play/computer*`، مما يمنع تشغيلها في المباريات المباشرة التنافسية ضد اللاعبين البشريين.
- **العزل المحلي التام:** تعمل الإضافة دون تحميل أو تنفيذ أي سكربتات برمجية خارجية (`eval` أو روابط خارجية).
- **انعدام تسريب البيانات:** لا تحتوي الإضافة على أي خوادم أو قنوات اتصال خارجية.

---

### ٥. التحليلات والإعلانات:

- **خالية من التتبع:** لا تحتوي الإضافة على أي مكتبات تتبع، أو تحليلات Google Analytics، أو خدمات إعلانية.
- **خالية من الإعلانات:** الإضافة مجانية ولا تعرض أي إعلانات تجارية.

---

### ٦. التواصل والدعم:

لأي أسئلة أو استفسارات تتعلق بسياسة الخصوصية، يُرجى التواصل معنا عبر:  
**البريد الإلكتروني:** hamzabellouchcontact@gmail.com
