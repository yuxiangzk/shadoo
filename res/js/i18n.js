(function (window, document) {
    'use strict';

    var dictionaries = {
        en: {
            languageLabel: 'Language', skipLink: 'Skip to the writing area', handVisibility: 'Show hand holding brush',
            shopTitle: 'The Shodo | 書道', designedBy: 'Designed by ', practiceOnline: 'Practice calligraphy online.',
            suppliesDescription: 'We provide traditional Chinese calligraphy supplies.<br><br>This includes brushes, rice paper, seals, inkstones, and more.<br>Everything you need to begin.',
            shopNow: 'SHOP NOW', shopNowAria: 'Visit the Asian Brush Painters shop', toolsAria: 'Calligraphy tools',
            shop: 'Shop', clear: 'Clear', finish: 'Finish', model: 'Model', close: 'Close', opacity: 'Opacity', color: 'Color',
            sealLabel: 'Your seal signature (up to 10 characters)', sealHelp: 'Only letters (a-z), numbers (0-9), and hyphens (-)',
            commentLabel: 'Comment (up to 100 characters)', replay: 'Replay', stop: 'Stop', download: 'Download', ok: 'OK', cancel: 'Cancel',
            yes: 'Yes', clearTitle: 'Clear?', brushTitle: 'Brush Selection', inkTitle: 'Ink Selection', paperTitle: 'Paper Selection',
            finishTitle: 'Save your work', pageTitle: 'Online Calligraphy Practice | The Shodo',
            metaDescription: 'Practice Chinese and Japanese calligraphy online with The Shodo. Choose a brush, ink color, and rice paper, then start writing in your browser.'
        },
        zh: {
            languageLabel: '语言', skipLink: '跳转到书写区域', handVisibility: '显示握笔手部', shopTitle: 'The Shodo | 书道',
            designedBy: '设计者：', practiceOnline: '在线练习书法。', suppliesDescription: '我们提供传统中国书法用品。<br><br>包括毛笔、宣纸、印章、砚台等。<br>开始书法练习所需的一切。',
            shopNow: '立即购买', shopNowAria: '访问 Asian Brush Painters 商店', toolsAria: '书法工具', shop: '商店', clear: '清除', finish: '完成', model: '字帖', close: '关闭',
            opacity: '不透明度', color: '颜色', sealLabel: '姓名印章（最多 10 个字符）', sealHelp: '仅限字母（a-z）、数字（0-9）和连字符（-）', commentLabel: '评论（最多 100 个字符）',
            replay: '回放', stop: '停止', download: '下载', ok: '确定', cancel: '取消', yes: '是', clearTitle: '清除？', brushTitle: '选择毛笔', inkTitle: '选择墨色', paperTitle: '选择宣纸', finishTitle: '保存作品',
            pageTitle: '在线书法练习 | The Shodo', metaDescription: '使用 The Shodo 在线练习中文书法和日式书道，选择毛笔、墨色与宣纸后即可开始书写。'
        },
        ja: {
            languageLabel: '言語', skipLink: '書写エリアへ移動', handVisibility: '筆を持つ手を表示', shopTitle: 'The Shodo | 書道',
            designedBy: 'デザイン：', practiceOnline: 'オンラインで書道を練習できます。', suppliesDescription: '伝統的な中国書道用品を提供しています。<br><br>筆、宣紙、印章、硯などを取り扱っています。<br>書道を始めるために必要なものが揃います。',
            shopNow: 'ショップを見る', shopNowAria: 'Asian Brush Painters のショップを開く', toolsAria: '書道ツール', shop: 'ショップ', clear: 'クリア', finish: '完了', model: '手本', close: '閉じる',
            opacity: '不透明度', color: '色', sealLabel: '落款（10文字以内）', sealHelp: '英字（a-z）、数字（0-9）、ハイフン（-）のみ使用できます', commentLabel: 'コメント（100文字以内）',
            replay: '再生', stop: '停止', download: 'ダウンロード', ok: 'OK', cancel: 'キャンセル', yes: 'はい', clearTitle: 'クリアしますか？', brushTitle: '筆を選択', inkTitle: '墨を選択', paperTitle: '紙を選択', finishTitle: '作品を保存',
            pageTitle: 'オンライン書道練習 | The Shodo', metaDescription: 'The Shodoで中国書道と日本書道をオンライン練習。筆、墨の色、宣紙を選んですぐに書けます。'
        },
        ko: {
            languageLabel: '언어', skipLink: '쓰기 영역으로 이동', handVisibility: '붓을 잡은 손 표시', shopTitle: 'The Shodo | 서도',
            designedBy: '제작:', practiceOnline: '온라인으로 서예를 연습할 수 있습니다.', suppliesDescription: '전통 중국 서예 용품을 제공합니다.<br><br>붓, 선지, 낙관, 벼루 등을 판매합니다.<br>서예를 시작하는 데 필요한 모든 것이 있습니다.',
            shopNow: '상점 보기', shopNowAria: 'Asian Brush Painters 상점 방문', toolsAria: '서예 도구', shop: '상점', clear: '지우기', finish: '완료', model: '字帖', close: '닫기',
            opacity: '불투명도', color: '색상', sealLabel: '낙관 서명 (10자 이내)', sealHelp: '영문자(a-z), 숫자(0-9), 하이픈(-)만 사용할 수 있습니다', commentLabel: '댓글 (100자 이내)',
            replay: '재생', stop: '중지', download: '다운로드', ok: '확인', cancel: '취소', yes: '예', clearTitle: '지울까요?', brushTitle: '붓 선택', inkTitle: '먹 선택', paperTitle: '종이 선택', finishTitle: '작품 저장',
            pageTitle: '온라인 서예 연습 | The Shodo', metaDescription: 'The Shodo에서 중국 서예와 일본 서도를 온라인으로 연습하세요. 붓, 먹 색상, 선지를 선택해 바로 쓸 수 있습니다.'
        },
        ar: {
            languageLabel: 'اللغة', skipLink: 'انتقل إلى مساحة الكتابة', handVisibility: 'إظهار اليد الممسكة بالفرشاة', shopTitle: 'The Shodo | الخط',
            designedBy: 'تصميم: ', practiceOnline: 'تدرّب على الخط عبر الإنترنت.', suppliesDescription: 'نوفر مستلزمات الخط الصيني التقليدي.<br><br>تشمل الفرش والورق والأختام ومحابر الحبر وغيرها.<br>كل ما تحتاجه لبدء التدريب.',
            shopNow: 'زيارة المتجر', shopNowAria: 'زيارة متجر Asian Brush Painters', toolsAria: 'أدوات الخط', shop: 'المتجر', clear: 'مسح', finish: 'إنهاء', model: 'النموذج', close: 'إغلاق',
            opacity: 'الشفافية', color: 'اللون', sealLabel: 'توقيع الختم (10 أحرف كحد أقصى)', sealHelp: 'استخدم الأحرف (a-z) والأرقام (0-9) والواصلات (-) فقط', commentLabel: 'تعليق (100 حرف كحد أقصى)',
            replay: 'إعادة التشغيل', stop: 'إيقاف', download: 'تنزيل', ok: 'موافق', cancel: 'إلغاء', yes: 'نعم', clearTitle: 'مسح؟', brushTitle: 'اختيار الفرشاة', inkTitle: 'اختيار الحبر', paperTitle: 'اختيار الورق', finishTitle: 'حفظ العمل',
            pageTitle: 'تدريب الخط عبر الإنترنت | The Shodo', metaDescription: 'تدرّب على الخط الصيني والياباني عبر الإنترنت مع The Shodo. اختر الفرشاة واللون والورق وابدأ الكتابة مباشرة.'
        }
    };

    var localeMap = { en: 'en_US', zh: 'zh_CN', ja: 'ja_JP', ko: 'ko_KR', ar: 'ar_SA' };
    var current = 'en';

    function t(key) {
        return (dictionaries[current] && dictionaries[current][key]) || dictionaries.en[key] || key;
    }

    function apply(root) {
        root = root || document;
        var nodes = root.querySelectorAll('[data-i18n]');
        for (var i = 0; i < nodes.length; i++) nodes[i].textContent = t(nodes[i].getAttribute('data-i18n'));
        nodes = root.querySelectorAll('[data-i18n-html]');
        for (var j = 0; j < nodes.length; j++) nodes[j].innerHTML = t(nodes[j].getAttribute('data-i18n-html'));
        nodes = root.querySelectorAll('[data-i18n-aria-label]');
        for (var k = 0; k < nodes.length; k++) nodes[k].setAttribute('aria-label', t(nodes[k].getAttribute('data-i18n-aria-label')));
    }

    function applyTemplates() {
        var templates = document.querySelectorAll('script[type="text/html"]');
        for (var i = 0; i < templates.length; i++) {
            var holder = document.createElement('div');
            holder.innerHTML = templates[i].textContent || templates[i].innerHTML;
            apply(holder);
            templates[i].textContent = holder.innerHTML;
        }
    }

    function updateResources() {
        var resources = window.TheShodo && TheShodo.Shodo && TheShodo.Shodo.Resources && TheShodo.Shodo.Resources.Write;
        if (!resources) return;
        var strings = resources.String;
        strings.Panel_OK = t('ok'); strings.Panel_Cancel = t('cancel'); strings.Panel_Delete = t('yes');
        strings.Panel_Clear_Label = t('clearTitle'); strings.Panel_Replay = t('replay'); strings.Panel_Replay_Stop = t('stop');
        strings.Panel_SelectBrush_Title = t('brushTitle'); strings.Panel_SelectInk_Title = t('inkTitle'); strings.Panel_SelectPaper_Title = t('paperTitle'); strings.Panel_Finish_Title = t('finishTitle');
        var write = window.TheShodo && TheShodo.Shodo && TheShodo.Shodo.Write;
        if (write) {
            if (write.PanelSelectBrush) write.PanelSelectBrush.prototype.title = t('brushTitle');
            if (write.PanelSelectInk) write.PanelSelectInk.prototype.title = t('inkTitle');
            if (write.PanelSelectPaper) write.PanelSelectPaper.prototype.title = t('paperTitle');
            if (write.PanelFinish) write.PanelFinish.prototype.title = t('finishTitle');
        }
        var clearButton = document.getElementById('button-clear');
        if (clearButton) clearButton.setAttribute('aria-label', t('clear'));
    }

    function updateCurrentPanel() {
        var shared = window.TheShodo && TheShodo.FloatingPanel && TheShodo.FloatingPanel.Shared;
        var panel = shared && shared.currentPanel;
        if (!panel || !panel.panel) return;
        var titleKey = panel.className === 'panel-select-brush' ? 'brushTitle' : panel.className === 'panel-select-ink' ? 'inkTitle' : panel.className === 'panel-select-paper' ? 'paperTitle' : panel.className === 'panel-finish' ? 'finishTitle' : null;
        if (titleKey) panel.title = t(titleKey);
        panel.panel.find('.floating-panel-title').text(panel.title);
        if (panel.className === 'panel-finish' && panel.buttons) {
            panel.buttons[0].label = t('replay');
            panel.buttons[1].label = t('download');
            panel.panel.find('.floating-panel-buttons input').eq(0).val(t('replay')).end().eq(1).val(t('download'));
        } else {
            panel.panel.find('.floating-panel-buttons input').each(function () { this.value = t('ok'); });
        }
        apply(panel.panel[0]);
    }

    function setLanguage(language) {
        if (!dictionaries[language]) language = 'en';
        current = language;
        document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.title = t('pageTitle');
        var description = document.querySelector('meta[name="description"]');
        if (description) description.setAttribute('content', t('metaDescription'));
        var ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', t('pageTitle'));
        var ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute('content', t('metaDescription'));
        var ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) ogLocale.setAttribute('content', localeMap[language]);
        apply(document);
        applyTemplates();
        updateResources();
        updateCurrentPanel();
        try { window.localStorage.setItem('shodo-language', language); } catch (ignore) {}
        var select = document.getElementById('language-select');
        if (select) select.value = language;
    }

    window.TheShodoI18n = { t: t, setLanguage: setLanguage, apply: apply, getLanguage: function () { return current; } };

    function init() {
        var select = document.getElementById('language-select');
        var saved = null;
        try { saved = window.localStorage.getItem('shodo-language'); } catch (ignore) {}
        if (select) select.addEventListener('change', function () { setLanguage(this.value); });
        setLanguage(saved && dictionaries[saved] ? saved : 'en');
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})(window, document);
