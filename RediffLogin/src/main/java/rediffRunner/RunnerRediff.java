package rediffRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features={"C:\\Users\\dipti\\PageModel\\RediffLogin\\src\\main\\java\\rediffFeature"},glue={"rediffStepDefinition"},monochrome=true,plugin={"pretty","html:rediffhtml"})
public class RunnerRediff {

}
