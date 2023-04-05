//package com.kaiburr1.swaggerConfig;
//
//import org.springdoc.core.models.GroupedOpenApi;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import io.swagger.v3.oas.models.info.Info;
//import io.swagger.v3.oas.models.OpenAPI;
//
//@Configuration
//
//public class OpenApiConfig { 
//	    @Bean
//	    public OpenAPI apiInfo() {
//	        return new OpenAPI()
//	        .info(new Info()
//		        .title("Cars Application")
//		        .version("1.0.0"));
//	    }
//
//	    @Bean
//	    public GroupedOpenApi httpApi() {
//	        return GroupedOpenApi.builder()
//	                .group("kaiburr1")
//	                .pathsToMatch("/**")
//	                .build();
//	    }
//	
//}
