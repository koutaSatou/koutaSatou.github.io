

let stateSlect = "none";

let inputData = new Array();
let stateInsertparts = new Array("none", "none", "none", "none", "none");
let alreadyStuckParts = new Array();
let renderingPreviewPage = "";
const INSERT_NUMBER =5;


//�y�[�W��button�^�O�̏�Ԃ��Ď�
document.getElementById("preview").onclick = function () {

    renderingPreviewPage = "";




    for (let i = 0; i < 5; i++) {

        if (stateInsertparts[i] == "none") {
            inputData[i] = new Array(stateInsertparts[i]);
            console.log(inputData[i]);
            alreadyStuckParts.push(stateInsertparts[i]);
        }
        if (stateInsertparts[i] == "headline") {
            inputData[i] = new Array(stateInsertparts[i]);
            inputData[i].push(document.getElementsByClassName("headline")[0].value);
            console.log(inputData[i]);
            alreadyStuckParts.push(stateInsertparts[i]);
        }
        if (stateInsertparts[i] == "selectparts_header") {
            inputData[i] = new Array(stateInsertparts[i]);
            console.log(inputData[i]);
            alreadyStuckParts.push(stateInsertparts[i]);
        }
        if (stateInsertparts[i] == "selectparts_footer") {
            inputData[i] = new Array(stateInsertparts[i]);
            console.log(inputData[i]);
            alreadyStuckParts.push(stateInsertparts[i]);
        }

        if (stateInsertparts[i] == "selectparts_layoutA") {
            inputData[i] = new Array(stateInsertparts[i]);
            inputData[i].push(document.getElementsByClassName("layout_typeA_pic")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeA_merchant")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeA_bland")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeA_place")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeA_label1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeA_label2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeA_label3")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeA_label4")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeA_label5")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeA_explain")[0].value);
            console.log(inputData[i]);
            alreadyStuckParts.push(stateInsertparts[i]);
        }
        if (stateInsertparts[i] == "selectparts_layoutB") {
            inputData[i] = new Array(stateInsertparts[i]);
            inputData[i].push(document.getElementsByClassName("layout_typeB_pic_1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeB_pic_2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeB_merchant_1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeB_merchant_2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeB_bland_1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeB_bland_2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeB_place_1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeB_place_2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeB_label1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeB_label2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeB_label3")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeB_label4")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeB_label5")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeB_explain")[0].value);
            console.log(inputData[i]);
            alreadyStuckParts.push(stateInsertparts[i]);
        }
        if (stateInsertparts[i] == "selectparts_layoutC") {
            inputData[i] = new Array(stateInsertparts[i]);
            inputData[i].push(document.getElementsByClassName("layout_typeC_pic_1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeC_pic_2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeC_merchant_1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeC_merchant_2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeC_bland_1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeC_bland_2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeC_place_1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeC_place_2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeC_label1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeC_label2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeC_label3")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeC_label4")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeC_label5")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeC_explain_1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeC_explain_2")[0].value);

            console.log(inputData[i]);
            alreadyStuckParts.push(stateInsertparts[i]);
        }
        if (stateInsertparts[i] == "selectparts_layoutD") {
            inputData[i] = new Array(stateInsertparts[i]);
            inputData[i].push(document.getElementsByClassName("layout_typeD_pic_1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_pic_2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_pic_3")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_merchant_1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_merchant_2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_merchant_3")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_bland_1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_bland_2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_bland_3")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_place_1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_place_2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_place_3")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_label1")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_label2")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_label3")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_label4")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_label5")[0].value);
            inputData[i].push(document.getElementsByClassName("layout_typeD_explain")[0].value);
            console.log(inputData[i]);
            alreadyStuckParts.push(stateInsertparts[i]);
        }

    }




    console.log(inputData);

    renderPreviewPage();

};

document.getElementById("output").onclick = function () {
    console.log("push output");
    $.ajax({
        type: "GET", //�@POST�ł���
        url: "php/getmail.php", //�@�����
        async: false
    })
        .then(
            function (param) {�@ //�@param�ɏ�����̃f�[�^�������Ă�
                //console.log(param); //�@�A���Ă�������s���鏈��
            },
            function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown); //�@�G���[�\��
            });
};


document.getElementById("insertButton_1").onclick = function () {
    pushInsertbutton("insertButton_1");
};
document.getElementById("insertButton_2").onclick = function () {
    pushInsertbutton("insertButton_2");
};
document.getElementById("insertButton_3").onclick = function () {
    pushInsertbutton("insertButton_3");
};
document.getElementById("insertButton_4").onclick = function () {
    pushInsertbutton("insertButton_4");
};
document.getElementById("insertButton_5").onclick = function () {
    pushInsertbutton("insertButton_5");
};

document.getElementById("deleteButton_1").onclick = function () {
    pushDeletebutton("deleteButton_1");
};
document.getElementById("deleteButton_2").onclick = function () {
    pushDeletebutton("deleteButton_2");
};
document.getElementById("deleteButton_3").onclick = function () {
    pushDeletebutton("deleteButton_3");
};
document.getElementById("deleteButton_4").onclick = function () {
    pushDeletebutton("deleteButton_4");
};
document.getElementById("deleteButton_5").onclick = function () {
    pushDeletebutton("deleteButton_5");
};


document.getElementById("selectparts_layoutA").onclick = function () {
    pushInsertparts("selectparts_layoutA");
};
document.getElementById("selectparts_layoutB").onclick = function () {
    pushInsertparts("selectparts_layoutB");
};
document.getElementById("selectparts_layoutC").onclick = function () {
    pushInsertparts("selectparts_layoutC");
};
document.getElementById("selectparts_layoutD").onclick = function () {
    pushInsertparts("selectparts_layoutD");
};

document.getElementById("selectparts_header").onclick = function () {
    pushInsertparts("selectparts_header");
};
document.getElementById("selectparts_footer").onclick = function () {
    pushInsertparts("selectparts_footer");
};



//Insert_button�@�������̏���
function pushInsertbutton(pushedID) {

    if (stateSlect != "none") {

        let q = document.getElementById(stateSlect);
        q.className = "btn btn-secondary";
    }

    stateSlect = pushedID;

    let p = document.getElementById(pushedID);
    p.className = "btn btn-warning"

    document.getElementById("sidebar").style.display = "none";
    document.getElementById("selectbar").style.display = "block";

}

//Delete_button �������̏���
function pushDeletebutton(pushedID) {

    let p = document.getElementById("parts_" + pushedID.substr(pushedID.length - 1, 1));
    p.textContent = "none";

    let q = document.getElementById("deleteButton_" + pushedID.substr(pushedID.length - 1, 1));
    q.className = "btn btn-light"
    q.innerText = "-"

    stateInsertparts[pushedID.substr(pushedID.length - 1, 1) - 1] = "none";
    console.log(stateInsertparts);

    let r = document.getElementById(stateSlect);
    r.className = "btn btn-secondary";

    document.getElementById("sidebar").style.display = "block";
    document.getElementById("selectbar").style.display = "none";


}


//sidebar Parts_button�@�������̏���
function pushInsertparts(pushedID) {

    //�I�����ꂽ���[���p�[�c�ɂ���ĊY������HTML�f�[�^��}��
    if (pushedID == "selectparts_layoutA") {
        $(function () {
            $("#parts_" + stateSlect.substr(stateSlect.length - 1, 1)).load("parts/layout_typeA.html");
        });
        stateInsertparts[stateSlect.substr(stateSlect.length - 1, 1) - 1] = pushedID;
    }
    if (pushedID == "selectparts_layoutB") {
        $(function () {
            $("#parts_" + stateSlect.substr(stateSlect.length - 1, 1)).load("parts/layout_typeB.html");
        });
        stateInsertparts[stateSlect.substr(stateSlect.length - 1, 1) - 1] = pushedID;
    }
    if (pushedID == "selectparts_layoutC") {
        $(function () {
            $("#parts_" + stateSlect.substr(stateSlect.length - 1, 1)).load("parts/layout_typeC.html");
        });
        stateInsertparts[stateSlect.substr(stateSlect.length - 1, 1) - 1] = pushedID;
    }
    if (pushedID == "selectparts_layoutD") {
        $(function () {
            $("#parts_" + stateSlect.substr(stateSlect.length - 1, 1)).load("parts/layout_typeD.html");
        });
        stateInsertparts[stateSlect.substr(stateSlect.length - 1, 1) - 1] = pushedID;
    }
    if (pushedID == "selectparts_header") {
        $(function () {
            $("#parts_" + stateSlect.substr(stateSlect.length - 1, 1)).load("parts/header.html");
        });
        stateInsertparts[stateSlect.substr(stateSlect.length - 1, 1) - 1] = pushedID;
    }
    if (pushedID == "selectparts_footer") {
        $(function () {
            $("#parts_" + stateSlect.substr(stateSlect.length - 1, 1)).load("parts/footer.html");
        });
        stateInsertparts[stateSlect.substr(stateSlect.length - 1, 1) - 1] = pushedID;
    }
    console.log(stateInsertparts);


    //�I����ԏ�����
    let p = document.getElementById(stateSlect);
    p.className = "btn btn-secondary";
    let q = document.getElementById("deleteButton_" + stateSlect.substr(stateSlect.length - 1, 1));
    q.className = "btn btn-dark"
    q.innerText = "�~"
    //stateSlect = 0;

    document.getElementById("sidebar").style.display = "block";
    document.getElementById("selectbar").style.display = "none";
}


//preview�y�[�W�������_�����O
function renderPreviewPage() {

    $.ajax({
        type: "GET", //�@POST�ł���
        url: "php/delete.php", //�@�����
        async: false
    })
        .then(
            function (param) {�@ //�@param�ɏ�����̃f�[�^�������Ă�
                //console.log(param); //�@�A���Ă�������s���鏈��
            },
            function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown); //�@�G���[�\��
            });

    renderPreviewPageHeader();

    $.ajax({
        type: "POST", //�@POST�ł���
        url: "php/preview.php", //�@�����
        data: { '�f�[�^': renderingPreviewPage }, //�@�n�������f�[�^
        dataType: "text", //�@�f�[�^�`�����w��
        scriptCharset: 'utf-8', //�@�����R�[�h���w��
        async: false
    })
        .then(
            function (param) {�@ //�@param�ɏ�����̃f�[�^�������Ă�
                //console.log(param); //�@�A���Ă�������s���鏈��
            },
            function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown); //�@�G���[�\��
            });
    renderingPreviewPage = "";

    for (let i = 0; i < INSERT_NUMBER; i++) {
        if (inputData[i][0] == "selectparts_header") { renderPreviewHeader(); }
        if (inputData[i][0] == "selectparts_footer") { renderPreviewFooter(); }
        if (inputData[i][0] == "selectparts_layoutA") { renderPreviewLayoutA(i); }
        if (inputData[i][0] == "selectparts_layoutB") { renderPreviewLayoutB(i); }
        if (inputData[i][0] == "selectparts_layoutC") { renderPreviewLayoutC(i); }
        if (inputData[i][0] == "selectparts_layoutD") { renderPreviewLayoutD(i); }

        $.ajax({
            type: "POST", //�@POST�ł���
            url: "php/preview.php", //�@�����
            data: { '�f�[�^': renderingPreviewPage }, //�@�n�������f�[�^
            dataType: "text", //�@�f�[�^�`�����w��
            scriptCharset: 'utf-8', //�@�����R�[�h���w��
            async: false
        })
            .then(
                function (param) {�@ //�@param�ɏ�����̃f�[�^�������Ă�
                    //console.log(param); //�@�A���Ă�������s���鏈��
                },
                function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log(errorThrown,i); //�@�G���[�\��
                });
        renderingPreviewPage = "";
    }

    //console.log(renderingPreviewPage);


    let preview_window
    preview_window = window.open("https://www.ringbell.rb.stg/etc/webapp/php/preview.html");

}

function renderPreviewPageHeader() {
    console.log("PageHeader");
    let str =
        `<meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
        <title>mailmagazin preview</title> 
        <meta name="viewport" content="width=660"> 
        <meta name="HandheldFriendly" content="true"> 
        <meta name="MobileOptimized" content="320"> 
        <style type="text/css"> 
         
        body { 
        font-family: "MS PGothic", sans-serif; 
        margin: 0; 
        padding: 0; 
        line-height: 135%; 
        font-size: 100%; 
        } 
        a { 
        color: #0053b1; 
        text-decoration: none; 
        } 
        table, th, td { 
        margin: 0; 
        padding: 0; 
        word-wrap:break-word; 
        } 
        img { 
        border-width: 0; 
        } 
        </style> 
         
        <!-- Google Tag Manager --> 
        <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-KM7ST7" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><script type="text/javascript"> 
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start": 
        new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0], 
        j=d.createElement(s),dl=l!="dataLayer"?"&l="l:"";j.async=true;j.src= 
        "//www.googletagmanager.com/gtm.js?id="idl;f.parentNode.insertBefore(j,f); 
        })(window,document,"script","dataLayer","GTM-KM7ST7"); 
        </script><!-- End Google Tag Manager --> 
        <body style="margin: 0; padding: 0; line-height: 150%; font-size: 16px; font-family: "MS PGothic", sans-serif;"> 
         
        <table width="100%" border="0" cellpadding="0" cellspacing="0"> 
        <tr> 
        <td align="center"> 
        <table width="630" border="0" cellpadding="0" cellspacing="0"> 
        <tr> 
        <td align="right" style="font-size:10px; padding: 3px 0;"> 
        <a href="https://fujingaho.ringbell.co.jp/mailmag/mm-20200513.html?utm_source=%E5%A9%A6%E4%BA%BA%E7%94%BB%E5%A0%B1&utm_medium=200513%E5%A9%A6%E4%BA%BA%E4%BC%9A%E5%93%A1%E3%83%A1%E3%83%AB%E3%83%9E%E3%82%AC_b01">�摜�AHTML�`�����\������Ȃ����͂�����</a> 
        </td> 
        </tr> 
        </table>`;
    renderingPreviewPage = str;

}

function renderPreviewHeader() {
    console.log("Header");

    let str =
        `<!-- ���w�b�_�[�G���A�@���������� --> 
        <!-- ��header ���S --> 
        <table width="630" border="0" cellpadding="0" cellspacing="0"> 
        <tr> 
        <td align="center" bgcolor="#FFFFFF" style="padding: 15px 0;"> 
        <a href="https://fujingaho.ringbell.co.jp/?utm_source=%E5%A9%A6%E4%BA%BA%E7%94%BB%E5%A0%B1&utm_medium=200513%E5%A9%A6%E4%BA%BA%E4%BC%9A%E5%93%A1%E3%83%A1%E3%83%AB%E3%83%9E%E3%82%AC_b02"><img src="https://d1v92rgvep0bm6.cloudfront.net/mailmag/img/header_sitetitle02.gif" width="230" alt="�w�l���̂�����" /></a> 
        </td> 
        </tr> 
        </table> 
        <!-- /��header ���S -->`;
    renderingPreviewPage = str;
}

function renderPreviewFooter() {
    console.log("Footer");

    let str =
        `<!-- ���t�b�^�[�G���A�@���������� -->
        <!-- ��footer -->
        <table width="630" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td colspan="3">
              <img src="https://d1v92rgvep0bm6.cloudfront.net/mailmag/img/spacer.gif" width="1" height="30" alt="">
            </td>
          </tr>
          <tr>
            <td colspan="3" align="center" style="border-top: 1px solid #9c9c9c; padding-top: 20px;">
              <a href="http://twitter.com/#!/fg_gourmet?utm_source=%E5%A9%A6%E4%BA%BA%E7%94%BB%E5%A0%B1&utm_medium=200513%E5%A9%A6%E4%BA%BA%E4%BC%9A%E5%93%A1%E3%83%A1%E3%83%AB%E3%83%9E%E3%82%AC_b32" target="_blank">
              <img src="https://d1v92rgvep0bm6.cloudfront.net/mailmag/img/ico-twitter-02.png" width="50" height="52" alt="Twitter "></a> &nbsp; <a href="https://shop.fujingaho.jp/blog/?utm_source=%E5%A9%A6%E4%BA%BA%E7%94%BB%E5%A0%B1&utm_medium=200513%E5%A9%A6%E4%BA%BA%E4%BC%9A%E5%93%A1%E3%83%A1%E3%83%AB%E3%83%9E%E3%82%AC_b33" target="_blank">
              <img src="https://d1v92rgvep0bm6.cloudfront.net/mailmag/img/ico-blog-02.png" width="50" height="52" alt="BLOG"></a> &nbsp; <a href="https://www.facebook.com/fujingahoshop/?utm_source=%E5%A9%A6%E4%BA%BA%E7%94%BB%E5%A0%B1&utm_medium=200513%E5%A9%A6%E4%BA%BA%E4%BC%9A%E5%93%A1%E3%83%A1%E3%83%AB%E3%83%9E%E3%82%AC_b34" target="_blank">
              <img src="https://d1v92rgvep0bm6.cloudfront.net/mailmag/img/ico-facebook-02.png" width="56" height="52" alt="facebook"></a> &nbsp; <a href="https://www.instagram.com/fujingahoshop/?utm_source=%E5%A9%A6%E4%BA%BA%E7%94%BB%E5%A0%B1&utm_medium=200513%E5%A9%A6%E4%BA%BA%E4%BC%9A%E5%93%A1%E3%83%A1%E3%83%AB%E3%83%9E%E3%82%AC_b35" target="_blank">
              <img src="https://d1v92rgvep0bm6.cloudfront.net/mailmag/img/ico-instagram-02.png" width="56" height="52" alt="instagram"></a> &nbsp; <a href="https://line.me/R/ti/p/%40ewz0057h/?utm_source=%E5%A9%A6%E4%BA%BA%E7%94%BB%E5%A0%B1&utm_medium=200513%E5%A9%A6%E4%BA%BA%E4%BC%9A%E5%93%A1%E3%83%A1%E3%83%AB%E3%83%9E%E3%82%AC_b36" target="_blank">
              <img src="https://d1v92rgvep0bm6.cloudfront.net/mailmag/img/ico-line-02.png" width="56" height="52" alt="LINE"></a>
            </td>
          </tr>
          <tr>
            <td><img src="https://d1v92rgvep0bm6.cloudfront.net/mailmag/img/spacer.gif" width="20" height="1" alt=""></td>
            <td align="left" style="padding-top: 10px;">
              <p>�����̃��[���́A�ߋ��ɕw�l���̂����񂹂ɂĂ��w���A�������͕��Ђ���̈ē����̑��t�ɋ����������������ɂ����肵�Ă��܂��B<br>
              �{���[���̔z�M����]����Ȃ����́A���萔�ł����u<a href="https://fujingaho.ringbell.co.jp/shop/mail/mag.aspx/?utm_source=%E5%A9%A6%E4%BA%BA%E7%94%BB%E5%A0%B1&utm_medium=200513%E5%A9%A6%E4%BA%BA%E4%BC%9A%E5%93%A1%E3%83%A1%E3%83%AB%E3%83%9E%E3%82%AC_b37">���[���}�K�W���̂��o�^�E���</a>�v�y�[�W�ɃA�N�Z�X���������A�g���[���}�K�W�������h���z�M��~�葱�����s���Ă��������B<br>
              ���[���A�h���X�̕ύX�́A�w<a href="https://fujingaho.ringbell.co.jp/shop/customer/menu.aspx/?utm_source=%E5%A9%A6%E4%BA%BA%E7%94%BB%E5%A0%B1&utm_medium=200513%E5%A9%A6%E4%BA%BA%E4%BC%9A%E5%93%A1%E3%83%A1%E3%83%AB%E3%83%9E%E3%82%AC_b38">���O�C��</a>�x�y�[�W��胍�O�C�����������A���[���A�h���X��ύX���Ă��������B</p>
              <p>���L�ڂ��ꂽ���e�͕ύX�ɂȂ�ꍇ���������܂��̂ŁA���炩���߂��������������B<br>
              ���{���[���͑��M��p�ƂȂ��Ă��܂��B<br>
              ���ԐM���������Ă����������邱�Ƃ��ł��܂���B<br>
              &#9734;���[���ł̂��₢���킹�͂����炩�� <a href="mailto:fujingaho@ringbell.co.jp">fujingaho@ringbell.co.jp</a><br>
              &#9734;���d�b�ł̂��₢���킹�F�t���[�R�[�� 0120-982-424<br>
              ��t�F10�F00�`17�F00�q�y���j���󂯕t���Ă���܂��r</p>
              <p>
                 <a href="https://fujingaho.ringbell.co.jp/?utm_source=%E5%A9%A6%E4%BA%BA%E7%94%BB%E5%A0%B1&utm_medium=200513%E5%A9%A6%E4%BA%BA%E4%BC%9A%E5%93%A1%E3%83%A1%E3%83%AB%E3%83%9E%E3%82%AC_b39">�w�l���̂�����</a><br>
              </p>
            </td>
            <td><img src="https://d1v92rgvep0bm6.cloudfront.net/mailmag/img/spacer.gif" width="20" height="1" alt=""></td>
          </tr>
          <tr>
            <td colspan="3" align="center" valign="middle"><img src="https://d1v92rgvep0bm6.cloudfront.net/mailmag/img/spacer.gif" width="1" height="20" alt=""></td>
          </tr>
          <tr>
            <td colspan="3" align="center" valign="middle" style="font-size: 10px; padding-top: 20px; color: #999; line-height: 150%; border-top: 1px solid #9c9c9c;">
              Copyright(C) 2020 HEARST FUJINGAHO All rights reserved.<br>
              Copyright RINGBELL Co.,Ltd All Rights Reserved.
            </td>
          </tr>
          <tr>
            <td colspan="3"><img src="https://d1v92rgvep0bm6.cloudfront.net/mailmag/img/spacer.gif" width="1" height="30" alt=""></td>
          </tr>
        </table>
                        <!-- ���t�b�^�[�G���A�@�������܂� -->`
    renderingPreviewPage = str;
}

function renderPreviewLayoutA(num) {

    console.log("LayoutA");

    let str =
        `<!-- �����i�p�^�[��A --> 
        <table width="630" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF"> 
        <tr> 
        <td align="center"> 
        <table width="460" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="font-size: 20px;"> 
        <tr> 
        <td style="padding-bottom: 10px;"><a href="` + inputData[num][1] + `"><img src="` + inputData[num][1] + `" alt="` + inputData[num][2] + `" width="520"></a></td>
        </tr> 
        <tr> 
        <td width="185" align="left" valign="top"><a href="` + inputData[num][2] + `"><b>` + inputData[num][2] + `</b></a></td>
         
        </tr> 
        <tr> 
        <td align="left" style="padding-top: 10px;">` + inputData[num][3] + `</td>
        </tr> 
        <tr> 
        <td align="left style="padding-bottom: 12px; font-size:14px;">` + inputData[num][4] + `</td>
        </tr> 
        <tr> 
        <td> 
        <div  style="display:inline-block ; background-color:` + `red` + ` ;padding: 5px 5px;  color: white; line-height: 130%;">` + inputData[num][5] + `</div>
        <div  style="display:inline-block ; background-color:` + `red` + ` ;padding: 5px 5px;  color: white; line-height: 130%;">` + inputData[num][6] + `</div>
        <div  style="display:inline-block ; background-color:` + `red` + ` ;padding: 5px 5px;  color: white; line-height: 130%;">` + inputData[num][7] + `</div>
        <div  style="display:inline-block ; background-color:` + `red` + ` ;padding: 5px 5px;  color: white; line-height: 130%;">` + inputData[num][8] + `</div>
        <div  style="display:inline-block ; background-color:` + `red` + ` ;padding: 5px 5px;  color: white; line-height: 130%;">` + inputData[num][9] + `</div>
        </td> 
        </tr> 
        <tr> 
        <td align="left" valign="top"> 
         
        </td> 
        </tr> 
        <tr> 
        <td align="left" valign="top" style="padding-bottom: 15px;">` + inputData[num][10] + ` 
        </td> 
        </tr> 
        <tr align="center"> 
        <td><a href="https://fujingaho.ringbell.co.jp/shop/g/g053F-126/?utm_source=%E5%A9%A6%E4%BA%BA%E7%94%BB%E5%A0%B1&utm_medium=200513%E5%A9%A6%E4%BA%BA%E4%BC%9A%E5%93%A1%E3%83%A1%E3%83%AB%E3%83%9E%E3%82%AC_b06"> 
        <img src="https://d1v92rgvep0bm6.cloudfront.net/mailmag/img/btn-order01.png" width="300" alt="�w���͂�����"/></a></td> 
        </tr> 
        </table></td> 
        </tr> 
        <tr> 
        <td><img src="https://d1v92rgvep0bm6.cloudfront.net/mailmag/img/spacer.gif" width="1" height="30" alt=""/></td> 
        </tr> 
        </table> 
        <!-- /�����i�p�^�[��A --> `;

    renderingPreviewPage = str;

}
function renderPreviewLayoutB() {

    console.log("LayoutB");


    renderingPreviewPage = str;

}

function renderPreviewLayoutC() {

    console.log("LayoutC");


    let str;

    renderingPreviewPage = str;

}

function renderPreviewLayoutD() {

    console.log("LayoutD");


    let str;

    renderingPreviewPage = str;

}