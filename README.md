# 웹팩을 사용해서 scss 컴파일(빌드) 하는 방법입니다.


### **`abstracts(폴더)`**
- 변수, 믹스 인 및 유틸리티 클래스을 넣으세요
- 이 폴더에는 또한 프로젝트에 대한 모든 전역 변수를 보유하는 _variables.scs파일이 포함되어 있습니다.


### **`base(폴더)`**
- 정규화를 재정의하기 위해 사용자 정의 재설정 파일을 추가 할 수 있습니다.
- 타이포그래피 (h1-6, p, a, blockquote 등)가 포함되어야합니다
- 전역 적으로 정의 된 태그 (본문, 기사, 기사, div 등)도 포함해야합니다.


### **`components(폴더)`**
- 재사용 가능한 구성 요소를 여기서 작성합니다.
- 각 구성 요소는 하나의 작업 만 수행합니다.
- 컴포넌트는 프로젝트 전체에서 재사용 가능
- omponents는 독립적입니다.
- 각 스타일 시트에는 모든 구성 요소 스타일, 변형 및 상태가 포함됩니다


### **`layouts(폴더)`**
- 기본 스타일의 고유 한 조합을 여기서 작성합니다.
- 각 스타일 시트에는 모든 구성 요소 스타일 재 지정 및 특정 레이아웃 만 포함됩니다.
- Media Query (반응형)에 대한 소스를 보유하는 _mediaquery.scss파일이 포함되어 있습니다.


### **`pages(폴더)`**
- 각 페이지마다 특정한 스타일을 여기서 작성합니다.


### **`themes(폴더)`**
- 프로젝트별 테마를 만드는 파일
- 이것은 확실히 프로젝트별로 다르므로, 필요성을 느끼는 경우에만 포함시키십시오.


### **`vendors(폴더)`**
-  외부 라이브러리 및 프레임워크의 모든 CSS 파일(Bootstrap, jQueryUI, FancyCarouselSliderj)을 포함하는 폴더 입니다.
