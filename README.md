# query-challenge-removeDuplicateStudents

query-challenge-removeDuplicateStudents

برای اینکه کادر اجرایی بوت‌کمپ بتوانند راحت‌تر و سریع‌تر به داده‌های کدآموزهای بوت‌کمپ دسترسی داشته باشند، نگهداری و بررسی آن‌ها اهمیت زیادی دارد. اما متاسفانه هنگام وارد کردن این اطلاعات به صورت دستی، مشکلی پیش آمد و اسم بعضی از کدآموزها بیشتر از یک بار وارد شد...!

از طرف مدیر بوت‌کمپ، تسکی به شما داده شده تا با پیاده‌سازی تابع removeDuplicateStudents، کدآموزهای تکراری را پیدا کنید و فقط یک نسخه از داده‌های مربوط به هر کاربر را حفظ و بقیه را حذف کنید.

برای پیاده‌سازی تابع removeDuplicateStudents لازم است به این موارد دقت کنید:

این تابع به عنوان ورودی، یک آرایه دریافت می‌کند. عناصر این آرایه، آبجکت‌هایی هستند که هر کدام از آن‌ها مربوط به اطلاعات یک کدآموز است.

هر آبجکت مربوط به اطلاعات یک کدآموز دارای پراپرتی‌های زیر است:

level
grade*
name*
lastName*
birthDate*
nationality
email
از ترکیب مقدار پراپرتی‌های grade، name، lastNam، birthDate می‌توان برای مشخص کردن و تفکیک کدآموز‌ها استفاده کرد. به عبارت دیگر نباید هیچ دو کدآموزی با مقادیر برابر این ویژگی‌ها وجود داشته باشند و ترکیب این مقادیر برای هر کدآموز منحصربفرد هستند.

در صورتی که چند نسخه از اطلاعات یک کدآموز موجود بود، نسخه‌ای که مقدار پراپرتی level در آن بیشتر است، نگهداری می‌شود و بقیه نسخه‌ها حذف می‌شوند.

در صورتی که مقدار پراپرتی level در چند نسخه از اطلاعات یک کدآموز مشترک بود، اولویت با نسخه‌ای که دارای مقدار index کمتری است خواهد بود و بقیه نسخه‌ها حذف می‌شوند.

همه‌ی عناصر آرایه خروجی باید دارای یک پراپرتی اضافه با کلید id باشند، مقدار id از ترکیب مقدار پراپرتی‌های grade، name، lastNam، birthDate به ترتیب از راست به چپ به دست می‌آید.

مثال
در مثال زیر سه نسخه از اطلاعات کاربری به اسم Jone doe وجود دارد. از آنجا که تمامی چهار ویژگی grade، name، lastNam، birthDate در این سه شیء برابر هستند، نتیجه می‌گیریم اطلاعات این کاربر سه بار و به صورت تکراری ذخیره شده است.

برای تشخیص نسخه معتبر، ابتدا ویژگی level را بررسی می‌کنیم و آبجکتی که مقدار level بیشتری دارد را نگه داشته و بقیه را حذف می‌کنیم.

در ادامه دو آبجکت که مقدار پراپرتی level در هردوی آن‌ها برابر ۳ است را بر اساس جایگاهشان در آرایه مقایسه کرده و آبجکتی که index کوچکتری دارد را نگه داشته و بقیه نسخه‌ها را حذف می کنیم.

نباید فراموش کنیم که در آرایه خروجی، تمامی عناصر آرایه دارای پراپرتی id هستند. مقدار id از ترکیب مقادیر پراپرتی‌های grade، name، lastNam، birthDate به ترتیب حاصل می‌شود.
